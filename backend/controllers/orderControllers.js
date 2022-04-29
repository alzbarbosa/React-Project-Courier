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
        name: req.body.name,
        address,
        postalCode,
        city,
        province,
        phone,
        user: req.user.id
    })
   
   res.status(200).json(order)
})

//@route PATCH /api/orders @access Private
const updateOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(!order) {
        res.status(400)
        throw new Error('Order not Found')
    }

    if(!req.user) {
        req.status(401)
        throw new Error('User not found')
    }

    // Checking if logged user matches with the user's order
    if(order.user.toString() !== req.user.id) {
        req.status(401)
        throw new Error('User not authorized')
    }

    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedOrder)
})

//@route DELETE /api/orders @access Private
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(!order) {
        res.status(400)
        throw new Error('Order not Found')
    }

    if(!req.user) {
        req.status(401)
        throw new Error('User not found')
    }

    // Checking if logged user matches with the user's order
    if(order.user.toString() !== req.user.id) {
        req.status(401)
        throw new Error('User not authorized')
    }

    await order.remove()

    res.status(200).json({id: req.params.id})
})



module.exports = {getOrders, setOrder, updateOrder, deleteOrder}

