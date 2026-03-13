const express = require("express")
const router = express.Router()
const controller = require("../controllers/admin.controller")

router.get("/getUsers", controller.getUsers)

module.exports = router