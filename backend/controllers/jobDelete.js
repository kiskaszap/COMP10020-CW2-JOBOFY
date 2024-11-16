const Job = require("../model/JobSchema");

// Create a new job
const jobDelete = async (req, res) => {
  console.log("Job delete route was called");
  const jobId = req.params.id;
  try {
    // Find the job document
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found." });
    }
    // Check if the job belongs to the authenticated employer
    if (job.employer.toString() !== req.user.id) {
      return res.status(403).json({ message: "Access denied." });
    }
    // Delete the job
    await job.deleteOne();
    res.status(200).json({ message: "Job deleted successfully." });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ message: "Server error. Could not delete job." });
  }
};

module.exports = { jobDelete };
