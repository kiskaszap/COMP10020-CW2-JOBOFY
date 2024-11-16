const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/UserSchema"); // Import User model

// Login controller function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login route was called");
  // Check if both email and password are provided
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate a JWT token with user ID and role
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET, // Ensure JWT_SECRET is defined in your environment variables
      { expiresIn: "24h" } // Token expiration time
    );

    // Authentication successful, send token and user data in response
    res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        role: user.role,
        email: user.email,
        username: user.username,
        // Include other fields if necessary
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = { loginUser };
