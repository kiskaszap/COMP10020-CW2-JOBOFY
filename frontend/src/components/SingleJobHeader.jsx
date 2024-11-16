// src/components/JobHeader.js

function SingleJobHeader({ title, city, minSalary, maxSalary }) {
  return (
    <div className="rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-center d-flex gap-4 align-items-center">
      <div className="">
        <div className="job__meta w-100 d-flex text-center text-md-start flex-column gap-2">
          <h3 className="job__title text-center h3 mb-0">{title}</h3>
          <div className="d-flex gap-4 justify-content-center justify-content-md-start flex-wrap mb-3 mt-2">
            <div className="d-flex gap-2 align-items-center">
              <i className="fa-light fa-location-dot"></i>
              {city}
            </div>
            <div className="d-flex gap-2 align-items-center">
              <i className="fa-light fa-briefcase"></i>
            </div>

            <div className="d-flex gap-2 fw-medium align-items-center">
              <i className="fa-light fa-price-tag"></i> ${minSalary} - $
              {maxSalary}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleJobHeader;
