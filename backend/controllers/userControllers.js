const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @route POST /api/users @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    
    // Check if all fields are filled
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    
    if(user) {
        //Create token
        const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      )
      
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: token
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    //Check user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password) )){
     
    //Create token
        const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      )

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: token
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


module.exports = {registerUser, loginUser}

