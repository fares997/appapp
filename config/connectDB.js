const mongoose = require("mongoose")
const config = require("config")

const connectDB = () => {
    mongoose.connect(config.get("MONGOURI"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("mongoose connected"))
    .catch(()=>console.log("erreur DB"))
}
module.exports = connectDB