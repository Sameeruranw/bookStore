const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        
      },
      price: {
        type: Number,
       
      },
      Category: {
        type: String
        
      },
      image: {
        type: String,
        
      },
      title: {
        type: String,
      
      },
})

module.exports = mongoose.model("Book",bookSchema)