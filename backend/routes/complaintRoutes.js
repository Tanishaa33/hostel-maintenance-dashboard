<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getComplaints,
} = require("../controllers/complaintController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, createComplaint);
router.get("/", protect, getComplaints);

module.exports = router;
=======
import express from "express";
import {
  createComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
} from "../controllers/complaintController.js";

const router = express.Router();

// ✅ GET ALL COMPLAINTS
router.get("/", getComplaints);

// ✅ CREATE COMPLAINT
router.post("/", createComplaint);

// ✅ UPDATE STATUS
router.put("/:id", updateComplaintStatus);

// ✅ DELETE COMPLAINT
router.delete("/:id", deleteComplaint);

export default router;
>>>>>>> 567fc3e (final-commit)
