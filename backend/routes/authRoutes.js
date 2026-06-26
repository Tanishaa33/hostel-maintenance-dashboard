const express = require("express");
const router = express.Router();
<<<<<<< HEAD

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
=======
const User = require("../models/User");

// SAVE USER AFTER FIREBASE LOGIN
router.post("/save-user", async (req, res) => {
  try {
    const { uid, email } = req.body;

    let user = await User.findOne({ uid });

    if (!user) {
      user = await User.create({
        uid,
        email,
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
>>>>>>> 567fc3e (final-commit)

module.exports = router;