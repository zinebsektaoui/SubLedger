const User = require("../models/user.model")

async function getUsers(req, res){
    try{
        const users = await User.find({role : "user"})
        res.json(users)
    }catch(err){
        return res.status(400).json({message : err.message})
    }
}

module.exports = {getUsers}