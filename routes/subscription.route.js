const express = require("express")
const { createSubscription, displayAll, displayById,updateSubscription, deleteSubscription } = require("../controllers/subscription.controller.js");
const middleware = require("../middlewares/auth.middleware.js");
const SubscriptionSchema = require("../validators/subscription.validator")
const validate = require("../middlewares/validate.middleware")

const router = express.Router();


router.use(middleware.authMiddleware);

// CREATE subscription
router.post("/", validate(SubscriptionSchema), createSubscription);

// GET all subscriptions (user connected)
router.get("/", displayAll);

// // GET one subscription
router.get("/:id", displayById);

// // UPDATE subscription
//router.put("/:id", middleware.authMiddleware,validateSubscription, updateSubscription);
router.put("/:id", updateSubscription);

// // DELETE subscription
router.delete("/:id", deleteSubscription);

module.exports = router;