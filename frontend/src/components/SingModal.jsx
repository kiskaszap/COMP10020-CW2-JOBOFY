import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignInModal() {
  const [email, setEmail] = useState("user@test.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To handle navigation after login

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://comp10020-cw2-jobofy-backend.onrender.com/login", {
        email,
        password,
      });

      console.log("Login response data:", response.data);

      // Store the authentication token in localStorage
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
      } else {
        throw new Error("Token not found in response data");
      }

      // Redirect based on role
      const role = response.data.user.role;
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "candidate") {
        navigate("/candidate-dashboard");
        window.location.reload();
      } else if (role === "employer") {
        navigate("/employer-dashboard");
        window.location.reload();
      } else {
        setError("Unknown user role.");
        window.location.reload();
      }
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="modal similar__modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
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
                {/* Font Awesome X-Mark Icon */}
                <i className="fa-regular fa-xmark text-primary"></i>
              </button>
            </div>

            {/* Placeholder for Tab Content */}
            <div className="tab-content" id=""></div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              method="post"
              className="d-flex flex-column gap-3"
            >
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="fw-medium text-dark mb-3">
                  Your Email
                </label>
                <div className="position-relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue="user@test.com"
                    placeholder="Enter your email"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i className="fa-light fa-user icon"></i>
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="fw-medium text-dark mb-3">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    defaultValue="1234"
                    placeholder="Enter your password"
                    required
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i className="fa-light fa-lock icon"></i>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group my-3">
                <button type="submit" className="rts__btn w-100 fill__btn">
                  Login
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <span className="d-block text-center fw-medium">
              Don`t have an account?
              <a
                href="#"
                data-bs-target="#signupModal"
                data-bs-toggle="modal"
                className="text-primary"
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
