import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    bookedServices: [
        {
            name: {type: String, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            jobseeker: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref:'Product'
            }
        }
    ],
    customerAddress: {
        address: {
            type: String,
            required: true
        },
        city: {type: String, required: true},
        pinCode: {type: String, required: true},
        country: {type: String}
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address:{type: String}
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    workDone: {
        type: Boolean,
        required: true,
        default: false
    },
    completedAt: {
        type: Date
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

export default Order