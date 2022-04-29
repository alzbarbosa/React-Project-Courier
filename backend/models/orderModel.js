const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'User',
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

