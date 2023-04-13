import asyncHandler from 'express-async-handler'
import Expertise from '../models/expertiseModel.js'

const getExpertise = asyncHandler(async(req, res) => {
    const expertises = await Expertise.find({})
    res.json(expertises)
})

export { getExpertise }