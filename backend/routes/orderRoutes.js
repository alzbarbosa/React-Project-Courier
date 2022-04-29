const express = require('express')
const router = express.Router()

const {getOrders, setOrder} = require('../controllers/orderControllers')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getOrders).post(protect, setOrder)

module.exports = router

