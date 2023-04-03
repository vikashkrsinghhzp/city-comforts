import express from "express";
import asycHandler from 'express-async-handler'
import Customer from "../models/customerModel.js";
import '../config/db.js'
import Test from "../models/testModel.js";
import { authCustomer, getCustomerProfile, registerCustomer } from "../controllers/customerControllers.js";
import { protect_customer } from "../middleware/authMiddleware.js";
//import { authJobseeker, registerJobseeker } from "../controllers/jobseekerController.js";
const router = express.Router()

router.route('/').post(registerCustomer)
router.post('/login', authCustomer)
router.route('/profile').get(protect_customer, getCustomerProfile)

export default router

