import { auth } from "../config/firebaseAdmin.js";

const verifyUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decodedToken = await auth.verifyIdToken(token);

    req.user = decodedToken;

    next();
  } catch (error) {
    console.error("Firebase Auth Error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired Firebase token",
    });
  }
};

export default verifyUser;