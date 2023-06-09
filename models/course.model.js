import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    difficulty: Number,
    proffessor: String    
})

const courseModel = mongoose.model('courses', courseSchema)

export default courseModel