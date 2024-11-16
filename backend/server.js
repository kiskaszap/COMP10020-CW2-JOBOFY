require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { registerUser } = require("./controllers/regController");
const { loginUser } = require("./controllers/loginController");
const { jobUpload } = require("./controllers/jobUpload");
const { fetchEmployerJobList } = require("./controllers/fetchEmployerJobList");
const { jobDelete } = require("./controllers/jobDelete");
const { jobEdit } = require("./controllers/jobEdit");
const { singleJobView } = require("./controllers/singleJobView");
const { deleteProfile } = require("./controllers/deleteProfile");
const {
  fetchCandidateProfile,
  updateCandidateProfile,
} = require("./controllers/candidateProfileController");
const { getAllJobs } = require("./controllers/getAllJobs");

const { authenticateToken } = require("./middlewares/authMiddleware");
const multer = require("multer");
const path = require("path");
const { userAuth } = require("./controllers/userAuth");

const app = express();
const PORT = process.env.PORT || 5000;

// Global middlewares
app.use(cors());
app.use(cors({ origin: "https://comp10020-cw2-jobofy.onrender.com", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads")); // Save files in 'uploads' directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname); // Generate unique filename
  },
});

const upload = multer({ storage: storage });

// Import routes
app.get("/", (req, res) => {
  res.send("Welcome to the MERN stack backend!");
});
app.use("/register", registerUser);
app.use("/login", loginUser);
app.use("/jobUpload", authenticateToken, upload.single("logo"), jobUpload);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/fetchEmployerJobList", authenticateToken, fetchEmployerJobList);
app.use("/jobDelete/:id", authenticateToken, jobDelete);
app.use("/jobEdit/:id", authenticateToken, jobEdit);
app.use("/fetchSingleJob", singleJobView);
app.use("/deleteProfile", authenticateToken, deleteProfile);
app.get("/candidateProfile", authenticateToken, fetchCandidateProfile);
app.post("/candidateProfile/update", authenticateToken, updateCandidateProfile);
app.get("/jobs", getAllJobs);
app.get("/userAuth", authenticateToken, userAuth);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Sample route
app.get("/", (req, res) => {
  res.send("Welcome to the MERN stack backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
