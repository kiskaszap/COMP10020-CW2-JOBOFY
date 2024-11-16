const mongoose = require("mongoose");
const Job = require("../model/JobSchema"); // Import Job model

// Login controller function
const fetchEmployerJobList = async (req, res) => {
  console.log("fetchEmployerJobList route was called");
  const user = req.user;
  console.log("User", user);

  Job.find({ employer: user.id })
    .then((jobs) => {
      res.status(200).json({ jobs });
    })
    .catch((error) => {
      console.error("Error fetching jobs:", error);
      res.status(500).json({ message: "Server error." });
    });
};

module.exports = { fetchEmployerJobList };
