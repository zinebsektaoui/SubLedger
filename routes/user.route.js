const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")
const userSchema = require("../validators/user.validator")
const validate = require("../middlewares/validate.middleware")

//router.post("/signUp", controller.signUp)
//router.post("/signIn",controller.signIn)


router.post('/signup', validate(userSchema), controller.signUp);
router.post('/signin', controller.signIn);

module.exports = router;