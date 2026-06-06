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