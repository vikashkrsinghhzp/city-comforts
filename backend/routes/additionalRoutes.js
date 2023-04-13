import express from 'express'
const router = express.Router()
import { getExpertise } from '../controllers/additionalController.js'

router.route('/').get(getExpertise)

export default router