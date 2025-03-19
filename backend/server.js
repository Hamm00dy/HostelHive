require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors"); // Import cors
const db = require("./config/db"); // Import the db pool
const roomRoutes = require("./routes/roomRoutes");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const complaintsRoute = require('./routes/complaintsRoute');
const paymentsRoutes = require("./routes/payments");
const noticesRoutes = require("./routes/noticesRoutes")


const path = require('path');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use("/api/admin", roomRoutes);
app.use("/api/admin", studentRoutes);
app.use('/api/', complaintsRoute);
app.use("/api/notices", noticesRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/auth", authRoutes); // Mount auth routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the 'uploads' directory

// Create the rooms table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roomNo VARCHAR(50) NOT NULL UNIQUE,
    isAvailable BOOLEAN DEFAULT true
  )
`)
  .then(() => console.log("Rooms table is ready.")) 
  .catch((err) => console.error("Error creating rooms table:", err));


// Create the students table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rollNo VARCHAR(50) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,
    roomNo VARCHAR(50) NOT NULL,
    personalDetails TEXT,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    FOREIGN KEY (roomNo) REFERENCES rooms(roomNo)
  )
`)
  .then(() => console.log("Students table is ready."))
  .catch((err) => console.error("Error creating students table:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});