import { Link } from "react-router-dom";

const JobCard = ({
  title,
  company,
  location,

  salaryMin,
  salaryMax,
  experience,
  logo,
}) => {
  return (
    <div className="col-lg-12">
      <div className="rts__job__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
        {/* Job Details */}
        <div className="d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center">
          {/* Company Icon */}
          <div className="company__icon">
            <img src={`http://localhost:5000${logo}`} alt="logo" />
          </div>

          {/* Job Meta */}
          <div className="job__meta">
            <div className="d-flex align-items-center gap-3">
              <Link to="#" className="job__title h6">
                {title}, {company}
              </Link>
            </div>
            <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-light fa-location-dot"></i> {location}
              </div>
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-light fa-briefcase"></i> {experience}
              </div>
            </div>
          </div>
        </div>

        {/* Job Tags and Apply Button */}
        <div className="d-flex gap-4 flex-wrap align-items-center">
          {/* Job Tags */}

          {/* Salary and Apply Button */}
          <div className="d-flex gap-3 flex-wrap">
            <div className="job__salary d-flex gap-2 align-items-center">
              <i className="fa-sharp fa-solid fa-dollar-sign"></i> {salaryMin} -{" "}
              {salaryMax}
            </div>
            <Link to="#" className="btn btn-secondary apply__btn">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
