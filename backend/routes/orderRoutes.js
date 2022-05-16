const express = require('express')
const router = express.Router()

const {getOrders, setOrder, updateOrder, deleteOrder} = require('../controllers/orderControllers')
const {protect} = require('../middleware/authMiddleware')

router.route('/').post(protect, setOrder).get(protect, getOrders)
router.route('/:id').patch(protect, updateOrder).delete(protect, deleteOrder)

module.exports = router

/*
.get(protect, getOrderById)
*/

