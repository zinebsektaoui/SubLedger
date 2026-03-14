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
        type : String,
        required : true,
        enum : ["Monthly", "Yearly"]
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, // ref b objectID
        ref: "user",
        required: true 
    },
},{
    timestamps : {
        createdAt : true,
        updatedAt : false
    }
})
module.exports = mongoose.model("subscription", subscriptionSchema)


// timestamps  are always passed on the second parameter of the schema