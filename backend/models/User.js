const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    priority: {
      type: String,
      default: "Medium",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);