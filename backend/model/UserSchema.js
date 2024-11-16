const mongoose = require("mongoose");

// Candidate-specific schema
const CandidateSchema = new mongoose.Schema({
  fullName: { type: String, required: false }, // Optional for later update

  phone: { type: String, required: false }, // Optional for later update
  email: { type: String, required: false }, // Optional for later update
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  age: { type: Number, min: 0 },
  qualification: String,
  language: [String],
  tags: [String],
  experience: String,
  showProfile: { type: Boolean, default: true },
  candidateDescription: String,
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }], // Array of applied jobs
});

// Employer-specific schema
const EmployerSchema = new mongoose.Schema({
  companyName: { type: String }, // Optional for later update
  companyLocation: String,
  jobOpenings: Number,
  salaryType: { type: String, enum: ["Hourly", "Monthly", "Yearly"] },
  jobCategory: { type: String },
  jobTitle: { type: String },
  myJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }], // Array of posted jobs
  appliedCandidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Array of applied candidates
});

// Main User schema
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    role: {
      type: String,
      enum: ["admin", "employer", "candidate"],
      required: true,
    },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    photo: { type: String },
    // Conditional schemas for each role
    candidateInfo: {
      type: CandidateSchema,
      required: function () {
        return this.role === "candidate";
      },
    },
    employerInfo: {
      type: EmployerSchema,
      required: function () {
        return this.role === "employer";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
