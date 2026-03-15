const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const signUp = async(req, res) => {
    const {name, email, password, role} = req.body
    try{
        const hashedPwd = await bcrypt.hash(password, 10) // 10 = salt rounds (security level  and performance)
        if (role === "admin") {
            const alreadyExist = await User.findOne({ role: "admin" });
            if (alreadyExist) {
                return res.status(403).json({message : "admin already exist !"});
            }
        }
        const newUser = await User.create({
            "name" : name,
            "email" : email,
            "password" : hashedPwd,
            "role" : role
        })
        console.log(newUser);
        
        return res.status(200).json({success : `User ${newUser.name} well created ! `})
    }catch(err){
        return res.status(400).json({error : err.message})
    }
}

const signIn = async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({error : "User with this email doesn't exist !"})
    }else{
        try{
            const isMatching = await bcrypt.compare(password, user.password)
            if(!isMatching){
                return res.status(400).json({error : "Password invalid"})
            }
            req.user = user // store user f object called req.user
            const token = jwt.sign(
                {id : user._id, email : user.email, password : user.password, role : user.role}, // payload => data dyel user logged in
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            )
            return res.status(200).json({success : `Welcome to ${user.role} space`, token : token})
        }catch(err){
            return res.status(400).json({error : err.message})
        }
    }
}
module.exports =  {signUp, signIn}