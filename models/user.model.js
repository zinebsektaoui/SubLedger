const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : string,
        required : true,
    },
    password : {
        type : string,
        required : true
    }
})

module.exports = mongoose.model("user", userSchema)