const mongoose = require("mongoose")
const Schema = mongoose.Schema
const user = require("../models/user.model")

const subscriptionSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required: true  
    },
    billingCycle : {
        type : Date,
        required : true
    },
    timestamp : {
        createdAt : true,
        updatedAt : false
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, // ref b objectID
        ref: "user",
        required: true 
    }
})

module.exports = mongoose.model("subscription", subscriptionSchema)