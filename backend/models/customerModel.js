import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const customerSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	contact: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},

	address1: { type: String, required: true },
	address2: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	country: { type: String, required: true },
	pincode: { type: Number, required: true },
	isAdmin: {
		type: Boolean,
		required: true,
		default: false
	}
})

customerSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

customerSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


const Customer = mongoose.model('Customer', customerSchema)

export default Customer




