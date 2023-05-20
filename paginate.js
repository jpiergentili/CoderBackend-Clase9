import mongoose from "mongoose";
import userModel from "./models/users.model.js";

const uri = 'mongodb+srv://javypier1:Q1w2e3r4@jp-backend-coder01.bavi18s.mongodb.net/'

const main = async () => {
    await mongoose.connect(uri, {
        dbName: 'marathon9'
    })
    console.log('DB connected!')

/*     const response = await userModel.find({gender: 'Female'}) */
    const response = await userModel.paginate({gender: 'Female'}, {limit: 5, page: 1})
    
    console.log(response)

}

main()