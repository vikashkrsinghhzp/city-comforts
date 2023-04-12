import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const jobseekerSchema = mongoose.Schema({
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
	
	aadharNum: {
		type: Number,
		required: true
	},
	aadharImg: {
		type: String,

	},

	address1: { type: String, required: true },
	address2: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	country: { type: String, required: true },
	pincode: { type: Number, required: true },
	expertise: {
		type: String,
		required: true
	},
	experience: {
		type: String,
		required: true
	},
	profileImg:{
		type: String,
		required: true
	},
    workSample:{
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false
	}
})

jobseekerSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

jobseekerSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const Jobseeker = mongoose.model('Jobseeker', jobseekerSchema)

export default Jobseeker




