const express = require("express")
require("dotenv").config()
const db = require("./config/db")

const app = express()

const userRoutes = require("./routes/user.route")
const adminRoutes = require("./routes/admin.route")
const subscriptionRoutes = require("./routes/subscription.route")

app.use(express.json())
db()

app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/subscriptions", subscriptionRoutes)


app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`); 
})