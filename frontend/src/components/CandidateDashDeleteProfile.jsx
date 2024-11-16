import { useState } from "react";
import axios from "axios";

function CandidateDashDeleteProfile() {
  const [password, setPassword] = useState(""); // Track password input
  const token = localStorage.getItem("token");

  const deleteProfile = async () => {
    try {
      const response = await axios.post(
        "https://comp10020-cw2-jobofy-backend.onrender.com/deleteProfile",
        { password }, // Only send the password value, not the input element
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Profile deleted successfully:", response.data);
      alert("Profile deleted successfully!");

      // Clear token and redirect to home
      localStorage.removeItem("token");
      window.location.href = "/"; // Redirect to home page
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        alert(error.response.data.message || "Error deleting profile");
      } else if (error.request) {
        console.error("No response received from the server:", error.request);
        alert("No response from server. Please check your network connection.");
      } else {
        console.error("Error setting up the request:", error.message);
        alert("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div className="dashboard__content d-flex">
      <div className="dashboard__right">
        <div className="dash__content">
          <div className="candidate__passwordchange">
            <h3 className="mb-30 fw-semibold">Delete Profile</h3>
            <div className="change__password">
              <div className="password__change__form">
                <h4 className="text-center mb-4">
                  Are you sure you want to delete your profile? All of your data
                  will be removed!
                </h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    deleteProfile(); // Trigger profile deletion
                  }}
                >
                  <div className="rts-input-group">
                    <label htmlFor="currentPassword">
                      Please Enter Your Login Password
                    </label>
                    <div className="input-box">
                      <input
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        placeholder="Enter your current password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Track password input
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-30">
                    <button
                      type="button"
                      className="cancel__buttonh rts__btn gray__btn"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="rts__btn fill__btn">
                      Delete Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateDashDeleteProfile;
