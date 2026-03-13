const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")
const subscription = require("../controllers/subscription.controller")
// const middleware = require("../middlewares/role.middleware")
const {checkRole} = require("../middlewares/role.middleware")

router.post("/signUp", controller.signUp)
router.post("/signIn",controller.signIn)




module.exports = router;