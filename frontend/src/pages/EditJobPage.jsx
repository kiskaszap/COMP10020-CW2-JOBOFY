// src/components/Breadcrumb.js
import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import EditJobHeader from "../components/EditJobHeader";
import SingleEditJob from "../components/SingleEditJob";
import shape1 from "../assets/img/breadcrumb/shape-1.svg";
import shape2 from "../assets/img/breadcrumb/shape-2.svg";
import shape3 from "../assets/img/breadcrumb/shape-3.svg";
import axios from "axios";

function EditJobPage() {
  const { id } = useParams();
  console.log(id, "This is jobId on front-end");
  const [job, setJob] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .post("https://comp10020-cw2-jobofy-backend.onrender.com/fetchSingleJob", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        id: id,
      })
      .then((response) => {
        setJob(response.data.message);
        console.log(job);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
      });
  }, []);

  return (
    <Fragment>
      <div className="rts__section breadcrumb__background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
              <div className="breadcrumb__area max-content mx-auto breadcrumb__padding">
                <EditJobHeader />
              </div>
              <div className="breadcrumb__area__shape breadcrumb__style__four d-flex gap-4 justify-content-end align-items-center">
                <div className="shape__one common">
                  <img src={shape1} alt="Shape 1" />
                </div>
                <div className="shape__two common">
                  <img src={shape2} alt="Shape 2" />
                </div>
                <div className="shape__three common">
                  <img src={shape3} alt="Shape 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SingleEditJob
        date={job.updatedAt}
        experience={job.experienceRequired}
        minSalary={job.salaryMin}
        maxSalary={job.salaryMax}
        qualification={job.qualification}
        city={job.city}
        description={job.description}
        logo={job.logo}
        id={id}
      />
    </Fragment>
  );
}

export default EditJobPage;
