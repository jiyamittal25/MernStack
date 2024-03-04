const mongoose = require("mongoose");
var mongoURL = `mongodb+srv://Srishti:Srishti123@cluster0.9ix6pzb.mongodb.net/`;
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
var connection = mongoose.connection;
connection.on("error", () => {
  console.log("mongoDB connection failed");
});
connection.on("connected", () => {
  console.log("mongoDB connection established");
});
module.exports = mongoose;
