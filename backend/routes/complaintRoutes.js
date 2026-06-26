import express from "express";
import {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaintStatus,
  deleteComplaint,
} from "../controllers/complaintController.js";

import verifyUser from "../middleware/firebaseAuth.js";

const router = express.Router();

// =========================================
// PUBLIC ROUTES
// =========================================

// Test Route
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Complaint API Working",
  });
});

// Landing Page Statistics
router.get("/", getComplaints);

// =========================================
// PROTECTED ROUTES
// =========================================

// Create Complaint
router.post("/", verifyUser, createComplaint);

// Get Single Complaint
router.get("/:id", verifyUser, getComplaintById);

// Update Complaint Status
router.put("/:id", verifyUser, updateComplaintStatus);

// Delete Complaint
router.delete("/:id", verifyUser, deleteComplaint);

export default router;