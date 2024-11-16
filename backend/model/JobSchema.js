const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    workingSchedule: { type: String, required: true },
    workingDays: { type: String, required: true },
    salaryType: { type: String, required: true },
    payFrequency: { type: String, required: true },
    salaryMin: { type: Number, required: true },
    salaryMax: { type: Number, required: true },
    experienceRequired: { type: String, required: true },
    qualification: { type: String, required: true },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    logo: { type: String }, // Store image path or URL if using image uploads
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
