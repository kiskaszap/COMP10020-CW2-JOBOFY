const Job = require("../model/JobSchema");

// Create a new job
const jobUpload = async (req, res) => {
  console.log("Job upload route was called");
  const {
    title,
    city,
    description,
    workingSchedule,
    workingDays,
    salaryType,
    payFrequency,
    salaryMin,
    salaryMax,
    experienceRequired,
    qualification,
  } = req.body;
  console.log(city, "This is city");
  try {
    // Create the new job document
    const newJob = new Job({
      title,
      city,
      description,
      workingSchedule,
      workingDays,
      salaryType,
      payFrequency,
      salaryMin,
      salaryMax,
      experienceRequired,
      qualification,
      employer: req.user.id, // assuming `req.user.id` is set by `authenticateToken` middleware
      logo: req.file ? `/uploads/${req.file.filename}` : undefined, // handle logo upload
    });

    // Save job to the database
    await newJob.save();

    res.status(201).json({
      message: "Job created successfully!",
      job: newJob,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ message: "Server error. Could not create job." });
  }
};

module.exports = { jobUpload };
