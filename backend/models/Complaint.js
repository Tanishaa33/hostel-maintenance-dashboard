import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  uid: String,
  title: String,
  category: String,
  description: String,
  status: {
    type: String,
    default: "Pending",
  },
  priority: {
    type: String,
    default: "Medium",
  },
});

// prevent overwrite in dev
const Complaint =
  mongoose.models.Complaint ||
  mongoose.model("Complaint", complaintSchema);

export default Complaint;