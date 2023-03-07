import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import jobseekerRoutes from './routes/jobseekerRoutes.js';
import connectDB from './config/db.js'
import Test from './models/testModel.js';

dotenv.config()

connectDB()
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.get('/', (req, res) => {
	res.send("API is running...")
})
app.post('/', (req, res) => {
	console.log(req.body);
	res.status(200).send("post working");
})

app.get('/insert', (req, res) => {
	var test = new Test()
	test.name = "info tech"
	test.city = "phagwara"
	test.save((err, data)=>{
		if(err){
			console.error(err)
		}else{
			res.status(200).send({"msg": "inserted to db"})
		}
	})
})

app.use('/api', jobseekerRoutes)

app.use((err, req, res) => {
	console.log(err);
});



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))