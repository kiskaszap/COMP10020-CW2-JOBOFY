// controllers/jobController.js
const Job = require("../model/JobSchema");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Lekér minden állást az adatbázisból
    res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
};

module.exports = { getAllJobs };
