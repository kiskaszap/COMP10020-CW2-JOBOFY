// controllers/candidateProfileController.js
const User = require("../model/UserSchema");

// Fetch candidate profile
const fetchCandidateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId, "candidateInfo email"); // Fetch candidate info and email
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.candidateInfo);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update candidate profile
const updateCandidateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      email,
      phone,

      fullName,
      gender,
      age,
      qualification,
      language,
      experience,
      showProfile,
      candidateDescription,
    } = req.body;
    console.log(
      email,
      phone,
      dateOfBirth,
      fullName,
      gender,
      age,
      qualification,
      language,
      experience,
      showProfile,
      candidateDescription
    );

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update candidate-specific fields within candidateInfo
    if (user.candidateInfo) {
      if (email) user.candidateInfo.email = email;
      if (phone) user.candidateInfo.phone = phone;

      if (fullName) user.candidateInfo.fullName = fullName;
      if (gender) user.candidateInfo.gender = gender;
      if (age !== undefined) user.candidateInfo.age = age; // Allow 0 as a valid age
      if (qualification) user.candidateInfo.qualification = qualification;
      if (language) user.candidateInfo.language = language;
      if (experience) user.candidateInfo.experience = experience;
      if (showProfile !== undefined)
        user.candidateInfo.showProfile = showProfile;
      if (candidateDescription)
        user.candidateInfo.candidateDescription = candidateDescription;
    }

    // Save the updated user document
    await user.save();
    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  fetchCandidateProfile,
  updateCandidateProfile,
};
