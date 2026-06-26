import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ================= SAVE FIREBASE USER =================
router.post("/save-user", async (req, res) => {
  try {
    const { uid, email, name, role } = req.body;

    if (!uid || !email) {
      return res.status(400).json({
        success: false,
        message: "UID and email are required",
      });
    }

    // Check if user already exists
    let user = await User.findOne({ uid });

    // Create user if not found
    if (!user) {
      user = await User.create({
        uid,
        email,
        name: name || "",
        role: role || "student",
      });
    }

    res.status(200).json({
      success: true,
      message: "User saved successfully",
      data: user,
    });
  } catch (error) {
    console.error("Save User Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;