import { useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import {
  SubmitSvg,
  CanditateSvg,
  DeleteSvg,
  MyJobSvg,
} from "../components/Svgs";
import CanditateProfile from "../components/CanditateProfile";
import CanditateJobList from "../components/CanditateJobList";
import CandidateDashDeleteProfile from "../components/CandidateDashDeleteProfile";
import { useNavigate } from "react-router-dom";

function CanditateDashboard() {
  const [activeComponent, setActiveComponent] = useState("Profile");

  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    navigate("/"); // Redirect to home page
    window.location.reload();
  };

  // Function to render the appropriate component based on activeComponent
  const renderComponent = () => {
    switch (activeComponent) {
      case "Profile":
        return <CanditateProfile />;
      case "AppliedJobs":
        return <CanditateJobList />;
      case "DeleteProfile":
        return <CandidateDashDeleteProfile />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard__content d-flex">
      <div className="dashboard__left">
        <div className="dash__menu">
          <ul>
            <li
              className="nav-item"
              onClick={() => setActiveComponent("Profile")}
            >
              <SidebarComponent svg={<MyJobSvg />} text="Profile" />
            </li>
            <li
              className="nav-item"
              onClick={() => setActiveComponent("AppliedJobs")}
            >
              <SidebarComponent svg={<SubmitSvg />} text="Applied Jobs" />
            </li>
            <li
              className="nav-item"
              onClick={() => setActiveComponent("DeleteProfile")}
            >
              <SidebarComponent svg={<DeleteSvg />} text="Delete Profile" />
            </li>
          </ul>
        </div>
        <div className="dash__logout">
          <button className="logout__btn btn btn-danger" onClick={handleLogout}>
            <i className="rt-login" /> Logout
          </button>
        </div>
      </div>
      <div className="">{renderComponent()}</div>
    </div>
  );
}

export default CanditateDashboard;
