const bcrypt = require("bcrypt");
const User = require("../model/UserSchema"); // Import User model

// Registration controller function
const registerUser = async (req, res) => {
  console.log("Registration route was called");
  const { username, password, email, role, candidateInfo, employerInfo } =
    req.body;

  // Check if all required fields are provided
  if (!username || !password || !email || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      console.log("Username or email already exists.");
      return res
        .status(400)
        .json({ message: "Username or email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      role,
      candidateInfo: role === "candidate" ? candidateInfo : undefined,
      employerInfo: role === "employer" ? employerInfo : undefined,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = { registerUser };
