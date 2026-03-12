const express = require("express")
const router = express.Router()
const controller = require("../controllers/subscription.controller")

router.get("/", (req, res) => {
    res.send()
})

module.exports = router