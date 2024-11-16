const Job = require("../model/JobSchema");

// Create a new job
const singleJobView = async (req, res) => {
  console.log("Job view route was called");
  const jobId = req.body.id;

  console.log(jobId, "This is jobId");
  try {
    // Find the job document
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found." });
    }

    res.status(200).json({ message: job });
  } catch (error) {
    console.error("Error viewing:", error);
    res.status(500).json({ message: "Server error. Could not view job." });
  }
};

module.exports = { singleJobView };
