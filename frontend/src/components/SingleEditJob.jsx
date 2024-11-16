import axios from "axios";
import { useState } from "react";

function SingleEditJob({
  experience,
  minSalary,
  maxSalary,
  qualification,
  city,
  description,
  logo,
  id,
}) {
  const token = localStorage.getItem("token");

  // States for each editable field, initialized with current values
  const [editExperience, setEditExperience] = useState(experience);
  const [editMinSalary, setEditMinSalary] = useState(minSalary);
  const [editMaxSalary, setEditMaxSalary] = useState(maxSalary);
  const [editQualification, setEditQualification] = useState(qualification);
  const [editCity, setEditCity] = useState(city);
  const [editDescription, setEditDescription] = useState(description);

  // Function to handle save changes
  const handleSaveChanges = () => {
    axios
      .put(
        `https://comp10020-cw2-jobofy-backend.onrender.com/jobEdit/${id}`, // Backend endpoint to update the job
        {
          experience: editExperience,
          salaryMin: editMinSalary,
          salaryMax: editMaxSalary,
          qualification: editQualification,
          city: editCity,
          description: editDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Job updated successfully:", response.data);
        alert("Job details updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating job:", error);
        alert("Failed to update job details.");
      });
  };

  return (
    <div className="container d-flex flex-column align-items-center p-3">
      {/* Job Logo */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <img
          className="img-fluid"
          src={`https://comp10020-cw2-jobofy-backend.onrender.com${logo}`}
          alt="Job Details"
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />
      </div>

      {/* Job Overview Section */}
      <div className="w-100 mb-4">
        <h6 className="fw-semibold mb-3 text-center">Job Overview</h6>
        <div className="d-flex flex-column gap-3">
          {/* Experience Input */}
          <div className="d-flex flex-column">
            <label htmlFor="experience" className="form-label">
              Experience
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={experience}
              value={editExperience}
              onChange={(e) => setEditExperience(e.target.value)}
            />
          </div>

          {/* Salary Input */}
          <div className="d-flex flex-column">
            <label htmlFor="salary" className="form-label">
              Offered Salary
            </label>
            <div className="d-flex gap-2">
              <input
                type="number"
                className="form-control"
                placeholder="Min Salary"
                value={editMinSalary}
                onChange={(e) => setEditMinSalary(e.target.value)}
              />
              <span className="align-self-center">to</span>
              <input
                type="number"
                className="form-control"
                placeholder="Max Salary"
                value={editMaxSalary}
                onChange={(e) => setEditMaxSalary(e.target.value)}
              />
            </div>
          </div>

          {/* Qualification Input */}
          <div className="d-flex flex-column">
            <label htmlFor="qualification" className="form-label">
              Qualification
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={qualification}
              value={editQualification}
              onChange={(e) => setEditQualification(e.target.value)}
            />
          </div>

          {/* Location Input */}
          <div className="d-flex flex-column">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={city}
              value={editCity}
              onChange={(e) => setEditCity(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Job Description with Editable Textarea */}
      <div id="description" className="w-100 mb-4">
        <label htmlFor="description" className="form-label">
          Job Description
        </label>
        <textarea
          className="form-control"
          rows="4"
          placeholder={description}
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
      </div>

      {/* Save Changes Button */}
      <button className="btn btn-success w-10" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
}

export default SingleEditJob;
