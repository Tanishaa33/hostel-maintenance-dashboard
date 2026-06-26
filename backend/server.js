<<<<<<< HEAD
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

/* ✅ IMPORTANT: CORS CONFIG (fix frontend issues) */
app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true,
  })
);

/* middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* routes */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/complaints", require("./routes/complaintRoutes"));

/* test route */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "AI Hostel Dashboard API Running 🚀",
  });
});

/* handle invalid routes */
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

/* error handler */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Server Error",
  });
});

/* start server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
=======
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import complaintRoutes from "./routes/complaintRoutes.js";

const app = express();

// 🔥 MIDDLEWARE
app.use(cors());
app.use(express.json());

// 🔥 HEALTH CHECK ROUTE (important for debugging)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 🔥 ROUTES
app.use("/complaints", complaintRoutes);

// 🔥 ERROR HANDLER (IMPORTANT)
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// 🔥 MONGODB CONNECTION (FIXED + SAFE)
mongoose
  .connect(
    "mongodb+srv://hostel-management:management%40123@cluster0.p1psjhg.mongodb.net/hostelDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("✅ MongoDB Connected");

    // 🔥 START SERVER ONLY AFTER DB CONNECTS
    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
  });
>>>>>>> 567fc3e (final-commit)
