const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./routes/book.routes")
const app = express();
const userRoute = require("./routes/user.route")
//middleware
app.use(express.json())
app.use(cors())
app.use("/books",router)
app.use("/user",userRoute)


dotenv.config()
const PORT = process.env.PORT
const URI = process.env.MongoDBURI


//connection to database
try {
    mongoose.connect(URI)
    console.log("successfully connected to database")
} catch (error) {
    console.log(error)
}



app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})