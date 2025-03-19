const express = require("express");
const { getAllRooms } = require("../controllers/roomController");

const router = express.Router();

// Fetch all rooms
router.get("/rooms", getAllRooms);

module.exports = router;
