import { useState } from "react";
import axios from "axios";

function SignupModal() {
  const [activeTab, setActiveTab] = useState({
    candidate: true,
    employer: false,
  });

  const [formData, setFormData] = useState({
    sname: "",
    signemail: "",
    spassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const role = activeTab.candidate ? "candidate" : "employer";
      const response = await axios.post("https://comp10020-cw2-jobofy-backend.onrender.com/register", {
        username: formData.sname,
        email: formData.signemail,
        password: formData.spassword,
        role,
        // Here, you can add additional fields based on role if necessary
        candidateInfo:
          role === "candidate" ? { fullName: formData.sname } : undefined,
        employerInfo:
          role === "employer" ? { fullName: formData.sname } : undefined,
      });

      console.log("Registration successful:", response.data);
      // Clear form data after successful registration
      setFormData({ sname: "", signemail: "", spassword: "" });
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div
      className="modal similar__modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="max-content similar__form form__padding">
            {/* Modal Header */}
            <div className="d-flex mb-3 align-items-center justify-content-between">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-regular fa-xmark text-primary"></i>
              </button>
            </div>

            {/* Account Type Selection */}
            <div className="d-block has__line text-center">
              <p>Choose your Account Type</p>
            </div>

            {/* Account Type Tabs */}
            <div className="tab__switch flex-wrap flex-sm-nowrap nav-tab mt-30 mb-30">
              <button
                className={`rts__btn nav-link ${
                  activeTab.candidate ? "active" : ""
                }`}
                onClick={() =>
                  setActiveTab({ candidate: true, employer: false })
                }
              >
                <i className="fa-light fa-user"></i> Candidate
              </button>
              <button
                className={`rts__btn nav-link ${
                  activeTab.employer ? "active" : ""
                }`}
                onClick={() =>
                  setActiveTab({ candidate: false, employer: true })
                }
              >
                <i className="fa-light fa-briefcase"></i> Employer
              </button>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="sname" className="fw-medium text-dark mb-3">
                  Your Name
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    name="sname"
                    id="sname"
                    placeholder="Enter your name"
                    required
                    className="form-control"
                    value={formData.sname}
                    onChange={handleChange}
                  />
                  <i className="fa-light fa-user icon"></i>
                </div>
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="signemail" className="fw-medium text-dark mb-3">
                  Your Email
                </label>
                <div className="position-relative">
                  <input
                    type="email"
                    name="signemail"
                    id="signemail"
                    placeholder="Enter your email"
                    required
                    className="form-control"
                    value={formData.signemail}
                    onChange={handleChange}
                  />
                  <i className="fa-sharp fa-light fa-envelope icon"></i>
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="spassword" className="fw-medium text-dark mb-3">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    name="spassword"
                    id="spassword"
                    placeholder="Enter your password"
                    required
                    className="form-control"
                    value={formData.spassword}
                    onChange={handleChange}
                  />
                  <i className="fa-light fa-lock icon"></i>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group my-3">
                <button type="submit" className="rts__btn w-100 fill__btn">
                  Sign Up
                </button>
              </div>
            </form>

            {/* Login Link */}
            <span className="d-block text-center fw-medium">
              Have an account?
              <a
                href="#"
                data-bs-target="#loginModal"
                data-bs-toggle="modal"
                className="text-primary"
              >
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
