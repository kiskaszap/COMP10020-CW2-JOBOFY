import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";
import {
  SubmitSvg,
  CanditateSvg,
  DeleteSvg,
  MyJobSvg,
} from "../components/Svgs";
import EmployerMyJobs from "../components/EmployerMyJobs";
import EmployerDashJobPost from "../components/EmployerDashJobPost";
import EmployerDashList from "../components/EmployerDashList";
import EmployerDashDeleteProfile from "../components/EmployerDashDeleteProfile";

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("MyJobs");

  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    navigate("/"); // Redirect to home page
    window.location.reload();
  };

  // Function to render the appropriate component based on activeComponent
  const renderComponent = () => {
    switch (activeComponent) {
      case "MyJobs":
        return <EmployerMyJobs />;
      case "SubmitJob":
        return <EmployerDashJobPost />;
      case "CandidateList":
        return <EmployerDashList />;
      case "DeleteProfile":
        return <EmployerDashDeleteProfile />;
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
              onClick={() => setActiveComponent("MyJobs")}
            >
              <SidebarComponent svg={<MyJobSvg />} text="My Jobs" />
            </li>
            <li
              className="nav-item"
              onClick={() => setActiveComponent("SubmitJob")}
            >
              <SidebarComponent svg={<SubmitSvg />} text="Submit Job" />
            </li>
            <li
              className="nav-item"
              onClick={() => setActiveComponent("CandidateList")}
            >
              <SidebarComponent svg={<CanditateSvg />} text="Candidate list" />
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

export default Dashboard;
