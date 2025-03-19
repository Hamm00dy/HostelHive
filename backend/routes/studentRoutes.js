const express = require("express");
const { registerStudent, getStudents, updateAttendance, updateMessFee } = require("../controllers/studentController");

const router = express.Router();

router.post("/students", registerStudent);
router.get("/students", getStudents);
router.put("/students/:rollNo/attendance", updateAttendance);
router.put("/students/messFee", updateMessFee); // New endpoint for mess fee

module.exports = router;
