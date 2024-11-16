import { useState } from "react";
import axios from "axios";

function EmployerDashJobPost() {
  const [jobData, setJobData] = useState({
    companyName: "",
    title: "",
    city: "",
    description: "",
    workingSchedule: "Day Shift",
    workingDays: "Mon - Fri",
    salaryType: "Hourly",
    payFrequency: "Monthly",
    salaryMin: "",
    salaryMax: "",
    experienceRequired: "",
    qualification: "",
    logo: null, // To store the image file
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setJobData({ ...jobData, logo: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to handle both text fields and file uploads
    const formData = new FormData();
    Object.keys(jobData).forEach((key) => {
      formData.append(key, jobData[key]);
    });

    try {
      const response = await axios.post(
        "https://comp10020-cw2-jobofy-backend.onrender.com/jobUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming a token is stored in local storage
          },
        }
      );
      setSuccess("Job posted successfully!");
      setError(null);
    } catch (err) {
      setError("Failed to post job. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <div className="dashboard__content d-flex">
      <div className="dashboard__right">
        <div className="dash__content">
          <form
            onSubmit={handleSubmit}
            className="my__profile__tab radius-16 bg-white"
          >
            <nav>
              <div className="nav nav-tabs">
                <a className="nav-link active" href="#info">
                  Company Details
                </a>
              </div>
            </nav>
            <div className="my__details" id="info">
              <div className="info__top">
                <div className="author__image">
                  {jobData.logo && (
                    <img
                      src={URL.createObjectURL(jobData.logo)}
                      alt="Company Logo"
                      className="p-4"
                    />
                  )}
                </div>
                <div className="select__image">
                  <label htmlFor="file" className="file-upload__label">
                    Upload Company Logo
                  </label>
                  <input
                    type="file"
                    className="file-upload__input"
                    id="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="info__field">
                <div className="rt-input-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name"
                    required
                    value={jobData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="title">Job Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Software Engineer"
                    required
                    value={jobData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="city">Location</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="London"
                    required
                    value={jobData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="description">Job Description</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter Job Description"
                    required
                    value={jobData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="workingSchedule">Working Schedule</label>
                  <select
                    name="workingSchedule"
                    id="workingSchedule"
                    className="form-select"
                    value={jobData.workingSchedule}
                    onChange={handleChange}
                  >
                    <option>Day Shift</option>
                    <option>Night Shift</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="workingDays">Working Days</label>
                  <select
                    name="workingDays"
                    id="workingDays"
                    className="form-select"
                    value={jobData.workingDays}
                    onChange={handleChange}
                  >
                    <option>Sat - Thu</option>
                    <option>Mon - Fri</option>
                    <option>Mon - Sun</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="salaryType">Salary Type</label>
                  <select
                    name="salaryType"
                    id="salaryType"
                    className="form-select"
                    value={jobData.salaryType}
                    onChange={handleChange}
                  >
                    <option>Hourly</option>
                    <option>Monthly</option>
                    <option>Custom</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="payFrequency">Pay Frequency</label>
                  <select
                    name="payFrequency"
                    id="payFrequency"
                    className="form-select"
                    value={jobData.payFrequency}
                    onChange={handleChange}
                  >
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="salaryMin">Salary Min</label>
                  <input
                    type="number"
                    id="salaryMin"
                    name="salaryMin"
                    placeholder="Min Salary"
                    required
                    value={jobData.salaryMin}
                    onChange={handleChange}
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="salaryMax">Salary Max</label>
                  <input
                    type="number"
                    id="salaryMax"
                    name="salaryMax"
                    placeholder="Max Salary"
                    required
                    value={jobData.salaryMax}
                    onChange={handleChange}
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="experienceRequired">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    id="experienceRequired"
                    name="experienceRequired"
                    placeholder="Enter Experience"
                    required
                    value={jobData.experienceRequired}
                    onChange={handleChange}
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="qualification">Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    placeholder="Enter Qualification"
                    required
                    value={jobData.qualification}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group my-3">
                <button type="submit" className="rts__btn w-100 fill__btn">
                  Post Job
                </button>
              </div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashJobPost;
