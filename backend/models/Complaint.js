import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    roomNo: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite during development
const Complaint =
  mongoose.models.Complaint ||
  mongoose.model("Complaint", complaintSchema);

export default Complaint;