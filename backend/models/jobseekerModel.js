import mongoose from 'mongoose'

const jobseekerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	gender:{
		type: String,
		required: true
	},
	contact:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	cpassword:{
		type: String,
		required: true
	},
	aadharNum:{
		type: String,
		required: true
	},
	aadharImg:{
		type: String,
		required: true
	},
	userAddress:{
		address1:{type: String, required: true},
		address2:{type: String, required: true},
		city:{type: String, required: true},
		state:{type: String, required: true},
		country:{type: String, required: true},
		pincode:{type: String, required: true},
	},
	expertise:{
		type: String,
		required: true
	},
	experience:{
		type: String,
		required: true
	},
})




