const mongoose = require("mongoose");

//PLEASE EDIT YOUR MONGO DB CONNECTION HERE
/*YOU CAN FIND SAMPLE COLLECTION at mongodb_collections folder */
var mongoURL = "mongodb+srv://Srishti:Srishti123@cluster0.9ix6pzb.mongodb.net/mern-room2024";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
