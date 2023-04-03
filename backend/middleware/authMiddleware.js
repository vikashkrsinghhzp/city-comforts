import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Customer from '../models/customerModel.js'
import Jobseeker from '../models/jobseekerModel.js'

const protect_customer = asyncHandler(async(req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       try{
        token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await Customer.findById(decoded.id).select('-password')
        console.log(decoded)

        next()
       }catch(error){
        console.error(error)
        res.status(401)
        throw new Error('not authorized token failed')
       }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized no token')
    }

})

const protect_jobseeker = asyncHandler(async(req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       try{
        token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await Jobseeker.findById(decoded.id).select('-password')
        console.log(decoded)

        next()
       }catch(error){
        console.error(error)
        res.status(401)
        throw new Error('not authorized token failed')
       }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized no token')
    }

})

export { protect_customer, protect_jobseeker }