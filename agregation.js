import mongoose from "mongoose";
import orderModel from "./models/order.model.js";

const uri = 'mongodb+srv://javypier1:Q1w2e3r4@jp-backend-coder01.bavi18s.mongodb.net/'

const main = async () => {
    await mongoose.connect(uri, {
        dbName: 'marathon9'
    })
    console.log('DB connected!')

/*     const result = await orderModel.insertMany([
        { name: 'Pepperoni', size: 'small', price: 19, qty: 10 },
        { name: 'Pepperoni', size: 'medium', price: 25, qty: 20 },
        { name: 'Pepperoni', size: 'medium', price: 25, qty: 10 },
        { name: 'Pepperoni', size: 'medium', price: 25, qty: 35 },
        { name: 'Pepperoni', size: 'large', price: 32, qty: 30 },
        { name: 'Cheese', size: 'small', price: 12, qty: 15 },
        { name: 'Cheese', size: 'medium', price: 13, qty: 50 },
        { name: 'Cheese', size: 'large', price: 14, qty: 10 },
        { name: 'Hawaina', size: 'large', price: 17, qty: 10 },
        { name: 'Hawaina', size: 'large', price: 18, qty: 20 },
    ]) */

    const orders = await orderModel.aggregate([
        {$match:{size: 'medium'}},
        {$group:{
            _id: "$name",
            totalQty: {$sum: "$qty"}
        }},
        {$sort: {totalQty: -1}},
        {$merge: {into: 'reports'}}
    ])

    console.log(orders);
}

main()