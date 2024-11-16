const bcrypt = require("bcrypt");
const User = require("../model/UserSchema");
const Job = require("../model/JobSchema");

// Controller for deleting profile
const deleteProfile = async (req, res) => {
  console.log("Delete profile request received");
  const { password } = req.body;
  const userId = req.user.id;

  try {
    // Fetch user from DB to validate password
    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found." });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(400).json({ message: "Invalid password." });
    }

    // Delete user's jobs
    await Job.deleteMany({ employer: userId });

    // Delete user profile
    await user.deleteOne();

    res.status(200).json({
      message: "Profile and all associated jobs deleted successfully.",
    });
  } catch (error) {
    console.error("Error during profile deletion:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not delete profile." });
  }
};

module.exports = { deleteProfile };
