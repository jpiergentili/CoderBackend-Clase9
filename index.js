import mongoose from "mongoose";
import usersModel from "./models/users.model.js";

const uri = 'mongodb+srv://javypier1:Q1w2e3r4@jp-backend-coder01.bavi18s.mongodb.net/'

const main = async () =>{
    await mongoose.connect(uri, {
        dbName: 'marathon9'
    })
    console.log('DB connected!')

    const response = await usersModel.find({first_name: 'Celia'}).explain('executionStats')
    console.log(response)
}

main()