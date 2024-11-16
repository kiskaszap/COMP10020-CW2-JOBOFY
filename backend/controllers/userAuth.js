const User = require("../model/UserSchema");

// Create a new job
const userAuth = async (req, res) => {
  console.log("UserAuth route was called");
  const userId = req.body.id;

  console.log(userId, "This is userId");
  try {
    // Find the job document
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    console.log(user.role, "This is user role");
    res.status(200).json({ message: job });
  } catch (error) {
    console.error("Error viewing:", error);
    res.status(500).json({ message: "Server error. Could not view job." });
  }
};

module.exports = { userAuth };
