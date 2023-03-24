import asyncHandler from 'express-async-handler'
import Customer from '../models/customerModel.js';
//import Jobseeker from "../models/jobseekerModel.js";
import generateToken from '../utils/generateToken.js';

const authCustomer = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const customer = await Customer.findOne({email})

    if(customer && (await customer.matchPassword(password))){
        res.json({
            _id: customer._id,
            name: customer.name,
            email: customer.email,
            isAdmin: customer.isAdmin,
            token: generateToken(customer._id),
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
    res.send({email, password})
})

const registerCustomer = asyncHandler(async (req, res) => {
    const { name, gender, contact, email, password, cpassword, address1, address2, city, state, country, pincode } = req.body;

    const customerExists = await Customer.findOne({ email })

    if(customerExists){
        res.status(400)
        throw new Error("User already exits")
    }

    const customer = await Customer.create({ name, gender, contact, email, password, cpassword, address1, address2, city, state, country, pincode })

    if(customer){
        res.status(201).json({
            _id: customer._id,
            name: customer.name,
            email: customer.email,
            isAdmin: customer.isAdmin,
            token: generateToken(customer._id),
        })
    } else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})

const getCustomerProfile = asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.user._id)

    if(customer){
        res.json({
            _id: customer._id,
            name: customer.name,
            email: customer.email,
            isAdmin: customer.isAdmin
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

export { registerCustomer, authCustomer }