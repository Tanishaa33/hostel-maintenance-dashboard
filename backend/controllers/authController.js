const registerUser = async (req, res) => {
  res.json({
    message: "Register route working",
  });
};

const loginUser = async (req, res) => {
  res.json({
    message: "Login route working",
  });
};

module.exports = {
  registerUser,
  loginUser,
};