import Complaint from "../models/Complaint.js";
import getPriority from "../services/aiEngine.js";

// ================= CREATE COMPLAINT =================
export const createComplaint = async (req, res) => {
  try {
    const { title, description, category, roomNo } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const priority = getPriority(description);

    const complaint = await Complaint.create({
      uid: req.user.uid,
      title,
      description,
      category,
      roomNo: roomNo || "",
      priority,
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    console.error("Create Complaint Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL COMPLAINTS =================
export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: complaints,
    });
  } catch (error) {
    console.error("Get Complaints Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
      data: [],
    });
  }
};

// ================= GET SINGLE COMPLAINT =================
export const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    console.error("Get Complaint Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE STATUS =================
export const updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedComplaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedComplaint,
    });
  } catch (error) {
    console.error("Update Complaint Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE COMPLAINT =================
export const deleteComplaint = async (req, res) => {
  try {
    const deletedComplaint = await Complaint.findByIdAndDelete(req.params.id);

    if (!deletedComplaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Complaint deleted successfully",
    });
  } catch (error) {
    console.error("Delete Complaint Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};