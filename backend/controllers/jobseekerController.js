import asyncHandler from 'express-async-handler'
import Jobseeker from "../models/jobseekerModel.js";
import generateToken from '../utils/generateToken.js';

const authJobseeker = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    const jobseeker = await Jobseeker.findOne({email})

    if(jobseeker && (await jobseeker.matchpassword(password))){
        res.json({
            _id: jobseeker._id,
            name: jobseeker.name,
            email: jobseeker.email,
            isAdmin: jobseeker.isAdmin,
            token: generateToken(jobseeker._id)
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
    res.send({email, password})
})

const registerJobseeker = asyncHandler(async (req, res) => {
    const { name, gender, contact, email, password, cpassword, aadharNum, aadharImg, address1, address2, city, state, country, pincode, expertise, experience } = req.body;

    const jobseekerExists = await Jobseeker.findOne({ email })

    if(jobseekerExists){
        res.status(400)
        throw new Error("User already exists")
    }

    const jobseeker = await Jobseeker.create({ name, gender, contact, email, password, aadharNum, aadharImg, address1, address2, city, state, country, pincode, expertise, experience })
    // const jobseeker = new Jobseeker({ name, gender, contact, email, password, aadharNum, aadharImg, address1, address2, city, state, country, pincode, expertise, experience })
    
    // jobseeker.save((err, data)=>{
    //     		if(err){
    //     			console.error(err)
    //                 res.status(422).send({"msg": err})
    //     		}else{
    //     			res.status(200).send({"msg": "inserted to db"})
    //     		}
    //     	})

    if(jobseeker){
        res.status(201).json({
            _id: jobseeker._id,
            name: jobseeker.name,
            gender: jobseeker.gender,
            contact: jobseeker.contact,
            email: jobseeker.email,
            password: jobseeker.password,
            aadharNum: jobseeker.aadharNum,
            aadharImg: jobseeker.aadharImg,
            address1: jobseeker.address1,
            address2: jobseeker.address2,
            city: jobseeker.city,
            state: jobseeker.state,
            country: jobseeker.country,
            pincode: jobseeker.pincode,
            expertise: jobseeker.expertise,
            experience: jobseeker.experience,
            isAdmin: jobseeker.isAdmin,
            token: generateToken(jobseeker._id),
        })
    } else{
        res.status(400)
        throw new Error("invalid user data")
    }
})

const getJobseekerProfile = asyncHandler(async (req, res) => {
    const jobseeker = await Jobseeker.findById(req.jobseeker._id)

    if(jobseeker){
        res.json({
            _id: jobseeker._id,
            name: jobseeker.name,
            email: jobseeker.email,
            isAdmin: jobseeker.isAdmin
        })
    } else{
        res.status(404)
        throw new Error('User not found')
    }
})

export { registerJobseeker, authJobseeker, getJobseekerProfile }