const express = require("express");
const env = require("dotenv");
const app = express()
const connectDB = require(".././config/connectDB")

// middleware
app.use(express.json())
//environement variable or you can say const
connectDB()

//routes
const userRoutes = require("./routes/user")
app.use("/api",userRoutes)



const port = process.env.PORT || 9000
app.listen(port, err =>
    err? console.log("erreur") : console.log(`server is running on port ${port}`))