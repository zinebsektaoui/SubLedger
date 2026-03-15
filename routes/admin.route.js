const express = require("express")
const router = express.Router()
const controller = require("../controllers/admin.controller")
const roles = require("../middlewares/role.middleware")
const middleware = require("../middlewares/auth.middleware.js");


router.get("/getUsers", middleware.authMiddleware, roles.roleMiddleware("admin"), controller.getUsers)

module.exports = router