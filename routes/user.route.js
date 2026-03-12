const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")

router.get("/", (req, res) => {
    res.send()
})

module.exports = router