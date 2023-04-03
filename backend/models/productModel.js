import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    Comment: {type: String, required: true}
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    expertise: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isAvailable: {
        type: Boolean,
        required: true,
        default: true
    }
})

const Product = mongoose.model('Product', productSchema)

export default Product