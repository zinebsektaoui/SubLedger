const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")

const app = express()

const userRoutes = require("./routes/user.route")
const adminRoutes = require("./routes/admin.route")
const subscriptionRoutes = require("./routes/subscription.route")

app.use(express.json())

app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/subscriptions", subscriptionRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${process.env.PORT}` );
    })
}).catch(err => console.log(err))