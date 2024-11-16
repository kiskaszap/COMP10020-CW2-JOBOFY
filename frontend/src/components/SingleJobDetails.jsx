function SingleJobDetails({
  date,
  experience,
  minSalary,
  maxSalary,
  qualification,
  city,
  description,
  logo,
}) {
  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center g-30">
          <div className="col-lg-8">
            <div className="rts__job__details">
              <div className="d-flex justify-content-center align-items-center mb-30">
                <img
                  className="w-40 h-auto" // Adjusts the width to 25%, height adjusts automatically
                  src={`http://localhost:5000${logo}`}
                  alt="Job Details"
                  style={{ maxWidth: "150px", maxHeight: "150px" }} // Inline style for further control
                />
              </div>

              {/* Job Overview */}
              <div className="job__overview style__four no-border-bottom mb-40">
                <h6 className="fw-semibold mb-30">Job Overview</h6>
                <div className="job__overview__content">
                  <ul className="d-grid grid-style">
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-calendar"></i>
                        </span>
                        <div>
                          <span className="left-text">Date Posted</span>
                          <span className="text">{date}</span>
                        </div>
                      </div>
                    </li>

                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-briefcase"></i>
                        </span>
                        <div>
                          <span className="left-text">Experience</span>
                          <span className="text">{experience}</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-dollar-sign"></i>
                        </span>
                        <div>
                          <span className="left-text">Offered Salary</span>
                          <span className="text">
                            ${minSalary}-${maxSalary}
                          </span>
                        </div>
                      </div>
                    </li>

                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-graduation-cap"></i>
                        </span>
                        <div>
                          <span className="left-text">Qualification</span>
                          <span className="text">{qualification}</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-location-dot"></i>
                        </span>
                        <div>
                          <span className="left-text">Location</span>
                          <span className="text">{city}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job Description */}
              <div id="description" className="mb-30">
                <h6 className="fw-semibold mb-20">Job Description</h6>
                <p>{description}</p>
              </div>

              {/* Apply Button and Share Links */}
              <div className="d-flex flex-wrap gap-4 mt-40 mb-60">
                <a className="rts__btn apply__btn fill__btn be-1 fw-bold">
                  Apply This Position
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleJobDetails;
