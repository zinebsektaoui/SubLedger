const express = require("express")

const { createSubscription } =require("../controllers/subscription.controller.js");

const middleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// CREATE subscription
router.post("/",middleware.authMiddleware, createSubscription);

// // GET all subscriptions (user connected)
// router.get("/", authMiddleware, getSubscriptions);
// 
// // GET one subscription
// router.get("/:id", authMiddleware, getSubscription);

// // UPDATE subscription
// router.put("/:id", authMiddleware,validateSubscription, updateSubscription);

// // DELETE subscription
// router.delete("/:id", authMiddleware, deleteSubscription);

module.exports = router;