import express from "express";
import asycHandler from 'express-async-handler'
import Customer from "../models/customerModel.js";
import '../config/db.js'
import Test from "../models/testModel.js";
import { authCustomer, registerCustomer } from "../controllers/customerControllers.js";
//import { authJobseeker, registerJobseeker } from "../controllers/jobseekerController.js";
const router = express.Router()

router.route('/').post(registerCustomer)
router.post('/login', authCustomer)

export default router

