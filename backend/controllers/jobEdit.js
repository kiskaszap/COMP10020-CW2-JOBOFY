const Job = require("../model/JobSchema");

// Edit a job
const jobEdit = async (req, res) => {
  console.log("Job edit route was called");
  const jobId = req.params.id;
  console.log(jobId, "This is jobId on backend");

  const { experience, salaryMin, salaryMax, qualification, city, description } =
    req.body;

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

    // Update job fields with new data
    job.experienceRequired = experience || job.experienceRequired;
    job.salaryMin = salaryMin || job.salaryMin;
    job.salaryMax = salaryMax || job.salaryMax;
    job.qualification = qualification || job.qualification;
    job.city = city || job.city;
    job.description = description || job.description;

    // Save updated job to the database
    await job.save();

    res.status(200).json({ message: "Job updated successfully.", job });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ message: "Server error. Could not update job." });
  }
};

module.exports = { jobEdit };
