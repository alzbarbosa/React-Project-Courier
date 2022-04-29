const asyncHandler = require('express-async-handler')

const Order = require('../models/orderModel')
const User = require('../models/userModel')

//@route GET /api/orders @access Private
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user.id})
    res.status(200).json(orders)
})

//@route POST /api/orders @access Private
const setOrder = asyncHandler(async (req, res) => {
    const {name, address, postalCode, city, province, phone} = req.body
     
    if(!name || !address || !postalCode || !city || !province || !phone) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }
    // Create order
    const order = await Order.create({
        name,
        address,
        postalCode,
        city,
        province,
        phone,
        user: req.user.id
    })
   console.log(order) 
   res.status(200).json(order)
})

module.exports = {getOrders, setOrder}

