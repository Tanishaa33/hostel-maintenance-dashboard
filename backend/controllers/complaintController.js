<<<<<<< HEAD
const Complaint = require("../model/Complaint");
const getPriority = require("../services/aiEngine");

const createComplaint = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      roomNo,
    } = req.body;

    const priority = getPriority(description);

    const complaint = await Complaint.create({
      title,
      description,
      category,
      roomNo,
      priority,
      createdBy: req.user.id,
    });

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createComplaint,
  getComplaints,
=======
import Complaint from "../models/Complaint.js";

// 🔥 GET ALL COMPLAINTS (FIXED + SAFE)
export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: complaints || [], // ✅ always array
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      data: [], // ✅ prevents frontend crash
      message: error.message,
    });
  }
};

// 🔥 CREATE COMPLAINT (NORMALIZED STATUS FIX)
export const createComplaint = async (req, res) => {
  try {
    const newComplaint = await Complaint.create({
      ...req.body,

      // 🔥 normalize status so dashboard works correctly
      status: req.body.status || "Pending",
    });

    res.status(201).json({
      success: true,
      data: newComplaint,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 🔥 UPDATE STATUS (IMPORTANT FOR REAL-TIME DASHBOARD)
export const updateComplaintStatus = async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status, // only update status safely
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 🔥 DELETE COMPLAINT
export const deleteComplaint = async (req, res) => {
  try {
    const deleted = await Complaint.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
>>>>>>> 567fc3e (final-commit)
};