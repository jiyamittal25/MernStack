const express = require("express");
const app = express();
const dbConfig = require("./db");
const roomRoute = require("./routes/roomsRoute");

app.use(express.json());

app.use("/api/rooms", roomRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
