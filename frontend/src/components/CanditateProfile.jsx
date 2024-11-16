import { useEffect, useState } from "react";
import axios from "axios";

function CanditateProfile() {
  const token = localStorage.getItem("token");

  // States for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(18);
  const [qualification, setQualification] = useState("");
  const [language, setLanguage] = useState("English");
  const [experience, setExperience] = useState("");
  const [showProfile, setShowProfile] = useState(true);
  const [candidateDescription, setCandidateDescription] = useState("");

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("https://comp10020-cw2-jobofy-backend.onrender.com/candidateProfile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const data = response.data;
        setFullName(data.fullName || "");
        setEmail(data.email || "jobpath@gmqail.com");
        setPhone(data.phone || "+880171234567");
        setDateOfBirth(data.dateOfBirth || "");
        setGender(data.gender || "Male");
        setAge(data.age || 18);
        setQualification(data.qualification || "SSC");
        setLanguage(data.language || "English");
        setExperience(data.experience || "1 Year");
        setShowProfile(
          data.showProfile !== undefined ? data.showProfile : true
        );
        setCandidateDescription(data.candidateDescription || "");
      })
      .catch((error) => {
        console.error("Error fetching candidate profile:", error);
      });
  }, []);

  // Handle form submission
  const handleSaveProfile = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://comp10020-cw2-jobofy-backend.onrender.com/candidateProfile/update",
        {
          fullName,
          email,
          phone,
          dateOfBirth,
          gender,
          age,
          qualification,
          language,
          experience,
          showProfile,
          candidateDescription,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile.");
      });
  };

  return (
    <div className="dashboard__right">
      <div className="dash__content">
        <div className="my__profile__tab radius-16 bg-white">
          <nav>
            <div className="nav nav-tabs">
              <a className="nav-link active">My Details</a>
            </div>
          </nav>
          <div className="my__details" id="info">
            <form onSubmit={handleSaveProfile}>
              <div className="info__top">
                <div className="author__image">
                  <img
                    src="src/assets/img/dashboard/proifle.svg"
                    alt="Profile"
                  />
                </div>
                <div className="select__image">
                  <label htmlFor="file" className="file-upload__label">
                    Upload New Photo
                  </label>
                  <input type="file" className="file-upload__input" id="file" />
                </div>
              </div>

              {/* Profile Fields */}
              <div className="info__field">
                <div className="rt-input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>

                <div className="rt-input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jobpath@gmqail.com"
                  />
                </div>

                <div className="rt-input-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+880171234567"
                  />
                </div>

                <div className="rt-input-group">
                  <label>Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="rt-input-group">
                  <label>Age</label>
                  <select value={age} onChange={(e) => setAge(e.target.value)}>
                    {[...Array(33)].map((_, i) => (
                      <option key={i} value={i + 18}>
                        {i + 18}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="rt-input-group">
                  <label>Qualification</label>
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </div>

                <div className="rt-input-group">
                  <label>Language</label>
                  <input
                    type="text"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                </div>

                <div className="rt-input-group">
                  <label>Experience</label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>

                <div className="rt-input-group">
                  <label>Show Profile</label>
                  <select
                    value={showProfile}
                    onChange={(e) => setShowProfile(e.target.value === "true")}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="rt-input-group">
                  <label>Candidate Description</label>
                  <textarea
                    value={candidateDescription}
                    onChange={(e) => setCandidateDescription(e.target.value)}
                    placeholder="Enter Description"
                  />
                </div>

                <button type="submit" className="rts__btn fill__btn">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanditateProfile;
