const mongoose = require("mongoose")

const subscription = new mongoose.Schema({
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
        ref: "User",
        required: true 
    }
})

module.exports = mongoose.model("transaction", transactionSchema)