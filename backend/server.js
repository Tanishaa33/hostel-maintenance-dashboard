// server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

// Import Firebase Admin (initializes Firebase)
import "./config/firebaseAdmin.js";

// Import Routes
import authRoutes from "./routes/authRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

/* =======================
   CORS Configuration
======================= */
app.use(
  cors({
    origin: "*", // Change to your frontend URL in production
    credentials: true,
  })
);

/* =======================
   Middleware
======================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   API Routes
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

/* =======================
   Health Check
======================= */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AI Hostel Dashboard API is Running",
  });
});

/* =======================
   404 Handler
======================= */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* =======================
   Global Error Handler
======================= */
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* =======================
   Start Server
======================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});