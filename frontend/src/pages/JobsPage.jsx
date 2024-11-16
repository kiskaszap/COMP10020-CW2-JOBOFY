import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import SignInModal from "../components/SingModal";
import SignUpModal from "../components/SignUpModal";
import shape1 from "@/assets/img/breadcrumb/shape-1.svg"
import shape2 from "@/assets/img/breadcrumb/shape-2.svg"
import shape3 from "@/assets/img/breadcrumb/shape-3.svg"

function JobPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://comp10020-cw2-jobofy-backend.onrender.com/jobs")
      .then((response) => {
        setJobs(response.data.jobs);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  return (
    <Fragment>
      <SignInModal />
      <SignUpModal />
      <div className="rts__section breadcrumb__background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
              <div className="breadcrumb__area max-content breadcrumb__padding z-2">
                <h1 className="breadcrumb-title h3 mb-3">Jobs</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb m-0 lh-1">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Jobs
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center">
                <div className="shape__one common">
                  <img
                    src={shape1}
                    alt="Shape 1"
                  />
                </div>
                <div className="shape__two common">
                  <img
                    src={shape2}
                    alt="Shape 2"
                  />
                </div>
                <div className="shape__three common">
                  <img
                    src={shape3}
                    alt="Shape 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30">
            {jobs.map((job) => (
              <div key={job._id} className="col-12">
                <JobCard
                  title={job.title}
                  company={job.company}
                  location={job.city}
                  description={job.description}
                  salaryMin={job.salaryMin}
                  salaryMax={job.salaryMax}
                  experience={job.experienceRequired}
                  logo={job.logo} // Átadjuk a logót
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default JobPage;
