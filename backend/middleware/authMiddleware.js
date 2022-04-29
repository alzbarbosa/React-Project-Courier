const jwt = require('jsonwebtoken')
const asyncHandler = require("express-async-handler")
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    const authHeader = req.headers.authorization

    if(authHeader && authHeader.startsWith('Bearer')) {
        try {
            // Get token from header
            token = authHeader.split(' ')[1]
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Get user from the token
            req.user = await User.findOne(decoded).select('-password')
            next()
        } catch(error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')

        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = {protect}