import mongoose from "mongoose";

const expertiseSchema = mongoose.Schema({
    expertise: {
        type: String,
        required: true
    }
})

const Expertise = mongoose.model('Expertise', expertiseSchema)

export default Expertise