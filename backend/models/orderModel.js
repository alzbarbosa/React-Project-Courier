const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    },
    nameSender: {
        type: String,
        require: [true, 'Please add a name']
    },
    addressSender: {
        type: String,
        require: [true, 'Please provide an email'],
    },
    postalCodeSender: {
        type: String,
        require: [true, 'Please provide a postal code']
    },
    citySender: {
        type: String,
        require: [true, 'Please provide a city']
    },
    provinceSender: {
        type: String,
        require: [true, 'Please provide a province']
    },
    phoneSender: {
        type: Number,
        require: [true, 'Please provide a phone']
    },
    nameReceiver: {
        type: String,
        require: [true, 'Please add a name']
    },
    addressReceiver: {
        type: String,
        require: [true, 'Please provide an email'],
    },
    postalCodeReceiver: {
        type: String,
        require: [true, 'Please provide a postal code']
    },
    cityReceiver: {
        type: String,
        require: [true, 'Please provide a city']
    },
    provinceReceiver: {
        type: String,
        require: [true, 'Please provide a province']
    },
    phoneReceiver: {
        type: Number,
        require: [true, 'Please provide a phone']
    },
    quantity: {
        type: Number,
        require: [true, 'Please provide a phone']
    },
    weight: {
        type: Number,
        require: [true, 'Please provide a phone']
    },
    price: {
        type: Number,
        require: [true, 'Please provide a phone']
    },
    eta: {
        type: String,
        require: [true, 'Please provide a eta']
    },
    status: {
        type: String,
        require: [true, 'Please provide a status']
    },
}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('Order', orderSchema)

/*
const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    },
    name: {
        type: String,
        require: [true, 'Please add a name']
    },
    address: {
        type: String,
        require: [true, 'Please provide an email'],
    },
    postalCode: {
        type: String,
        require: [true, 'Please provide a password']
    },
    city: {
        type: String,
        require: [true, 'Please provide a password']
    },
    province: {
        type: String,
        require: [true, 'Please provide a password']
    },
    phone: {
        type: Number,
        require: [true, 'Please provide a password']
    },
}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('Order', orderSchema)





*/

