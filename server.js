const express = require("express")
const userRoutes = require("./routes/user.route")
const adminRoutes = require("./routes/admin.route")
const subscriptionRoutes = require("./routes/subscription.route")
const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/subscription", subscriptionRoutes)