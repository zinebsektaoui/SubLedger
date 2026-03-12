// const mongoose = require("mongoose")
// const express = require("express")
const User = require("../models/user.model")
const bcrypt = require("bcrypt")

const signUp = async(req, res) => {
    const {name, email, password, role} = req.body
    if(!name || !email || !password){
        return res.status(400).json({message : "You must fill all fields !"})
    }
    try{
        const hashedPwd = await bcrypt.hash(password, 10) // 10 = salt rouds (security level  and performance)
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
module.exports = {signUp}