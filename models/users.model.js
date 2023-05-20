import mongoose from "mongoose";
import mongoosePagninate from "mongoose-paginate-v2"

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String
})

userSchema.plugin(mongoosePagninate)
const userModel = mongoose.model('users', userSchema)

export default userModel