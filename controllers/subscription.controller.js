const User = require("../models/user.model")
const Subscription = require("../models/subscription.model")

const createSubscription = async(req, res) => {
  // return res.status(200).json({message: "ok"});
  const {name, price, billingCycle, user_id} = req.body
  if(!name || !price || !billingCycle || !user_id){
    return res.status(400).json({error : "You must fill all fields !"})
  }
  const findUser = await User.findById(user_id)
  if(!findUser){
    return res.status(404).json({message : "User not found !"})
  }
  const newSubscrpt = {
    name,
    price,
    billingCycle,
    user_id
  }
  const subsc = await Subscription.create(newSubscrpt)
  return res.status(200).json({message : "subsc well created !"})
}

const displayAll = async(req, res) =>{
  const subscriptions = await Subscription.find()
  return res.status(200).json({message : "well found", subscriptions : subscriptions})
}

const displayById = async(req, res) => {
  const {id} = req.params
  if(!id) {
    return res.status(400).json({error : "You must enter an id !"})
  }
  const subscription = await Subscription.findById(id)
  if(!subscription) {
    return res.status(404).json({error : "Subscription not found !"})
  }
  return res.status(200).json({subscription})
}

const updateSubscription = async(req, res) => {
  const {id} = req.params
  const searchSub = await Subscription.findById(id)
  if(!searchSub) {
    return res.status(404).json({error : "Subscription not found"})
  }

  const updates = req.body
  const subToUpdate = await Subscription.findByIdAndUpdate(// takes 3 parameters : id, updates o options
    id,
    updates,
    {
      new : true
    }
  )
  return res.status(200).json({"Subscription updated" : subToUpdate})
}

const deleteSubscription = async(req, res) => {
  const {id} = req.params
  const toDelete = await Subscription.findByIdAndDelete(id)
  if(!toDelete) {
    return res.status(404).json({error : "Subscription not found"})
  }
  return res.status(200).json({message : "deleted"})
}

module.exports = { createSubscription, displayAll, displayById, updateSubscription, deleteSubscription }