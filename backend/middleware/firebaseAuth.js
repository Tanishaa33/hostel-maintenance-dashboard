import admin from "firebase-admin";

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};