import express from "express";
import asycHandler from 'express-async-handler'
import Jobseeker from "../models/jobseekerModel.js";
import '../config/db.js'
import Test from "../models/testModel.js";
import { authJobseeker, getJobseekerProfile, registerJobseeker } from "../controllers/jobseekerController.js";
import { protect_jobseeker } from "../middleware/authMiddleware.js";
const router = express.Router()

// const getProducts =asycHandler (async(req, res) => {
//     const jobseekers = await Jobseeker.find({})
//     res.json(jobseekers)
//     res.send(jobseekers)
// })

router.post('/', registerJobseeker)
router.post('/login', authJobseeker)
router.route('/profile').get(protect_jobseeker, getJobseekerProfile)
// router.post('/new-jobseeker', (req, res) => {
//     //console.log(req.body);
//     const { name, gender, contact, email, password, cpassword, aadharNum, aadharImg, address1, address2, city, state, country, pincode, expertise, experience } = req.body;
//     const jobseeker = new Jobseeker({ name, gender, contact, email, password, aadharNum, aadharImg, address1, address2, city, state, country, pincode, expertise, experience })
//     jobseeker.save((err, data)=>{
// 		if(err){
// 			console.error(err)
//             res.status(422).send({"msg": err})
// 		}else{
// 			res.status(200).send({"msg": "inserted to db"})
// 		}
// 	})
//    // res.json({message: req.body});
// })



// router.post('/new-jobseeker', (req, res, next) => {
//     const { name, gender, contact, email, password, cpassword, aadharNum, aadharImg, address1, address2, city, state, country, pincode, expertise, experience } = req.body;
//     if(!name || !gender || !contact || !email || !password || !cpassword || !aadharNum || !aadharImg || !address1 || !address2 || !city || !state || !country || !pincode || !expertise || !experience){
//         return res.status(422).json({error: "please fill the details properly"});
//     }
//     if(password != cpassword){
//         return res.status(422).json({error: "password and confirm password should be same"});
//     }
//     Jobseeker.findOne({email: email}).then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }

//         const jobseeker = new Jobseeker({ name, gender, contact, email, password, cpassword, aadharNum, aadharImg, address1, address2, city, state, country, pincode, expertise, experience });
//         jobseeker.save().then(() => {
//             res.status(201).json({message: "user registered successfully"});
//         }).catch((err) => res.status(500).json({error: "Failed to register"}));
//     }).catch(err => {console.log(err); });
// } )
router.route('/jobseekers').get((req, res) => {res.send('api running')})

export default router