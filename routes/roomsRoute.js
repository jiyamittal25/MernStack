const express = require("express");
const router = express.Router();
const fs = require("fs");

// Assuming room.json is in the same directory as this script
const roomFilePath = "../models/room.json";

router.get("/getallrooms", (req, res) => {
  try {
    // Load the JSON data
    const roomData = require(roomFilePath);

    // Send the entire room data
    return res.json({ rooms: roomData });
  } catch (err) {
    console.error("Error fetching rooms:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/getroombyid", (req, res) => {
  const roomid=req.body.roomid;
  try {
    // Load the JSON data
    const roomData = require(roomFilePath);

    // Send the entire room data
    return res.json({_id:roomid });
    // const rooms=await Room.findOne({_id:roomid})
  } catch (err) {
    console.error("Error fetching rooms:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
