import axios from 'axios'

const API_URL = '/api/orders/'

// Create new order
const createOrder = async (orderData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, orderData, config)

    return response.data
}

// Get user order
const getOrders = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}


const orderService = {
    createOrder,
    getOrders,
}

export default orderService
