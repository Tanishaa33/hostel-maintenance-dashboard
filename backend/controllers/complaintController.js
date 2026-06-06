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
};