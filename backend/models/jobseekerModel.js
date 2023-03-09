import mongoose from 'mongoose'

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
})

const Jobseeker = mongoose.model('Jobseeker', jobseekerSchema)

export default Jobseeker




