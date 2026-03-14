const express = require("express")
const { createSubscription, displayAll, displayById,updateSubscription, deleteSubscription } = require("../controllers/subscription.controller.js");
const middleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// CREATE subscription
router.post("/",middleware.authMiddleware, createSubscription);

// GET all subscriptions (user connected)
router.get("/", middleware.authMiddleware, displayAll);

// // GET one subscription
router.get("/:id", middleware.authMiddleware, displayById);

// // UPDATE subscription
//router.put("/:id", middleware.authMiddleware,validateSubscription, updateSubscription);
router.put("/:id", middleware.authMiddleware, updateSubscription);

// // DELETE subscription
router.delete("/:id", middleware.authMiddleware, deleteSubscription);

module.exports = router;