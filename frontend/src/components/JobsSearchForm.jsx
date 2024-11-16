function JobSearchForm() {
  return (
    <div className="rts__section">
      <div className="container">
        <div className="row">
          <div className="advance__search__bg">
            <form action="#" className="advance__search__form">
              {/* Job Type */}
              <div className="search__item">
                <div className="position-relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Enter Type Of job"
                    required
                  />
                  <i className="fa-light fa-magnifying-glass"></i>
                </div>
              </div>

              {/* Job Location */}
              <div className="search__item">
                <div className="position-relative d-flex">
                  <i className="fa-light fa-location-dot"></i>
                  <select className="nice-select" aria-label="Search Location">
                    <option selected>Search Location</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Barisal</option>
                    <option value="3">Chittagong</option>
                    <option value="4">Rajshahi</option>
                  </select>
                </div>
              </div>

              {/* Job Category */}
              <div className="search__item">
                <div className="position-relative d-flex">
                  <i className="fa-light fa-briefcase"></i>
                  <select
                    className="nice-select"
                    aria-label="Choose a Category"
                  >
                    <option selected>Choose a Category</option>
                    <option value="1">Government</option>
                    <option value="2">NGO</option>
                    <option value="3">Private</option>
                    <option value="4">Freelancing</option>
                  </select>
                </div>
              </div>

              {/* Date Posted */}
              <div className="search__item">
                <div className="position-relative d-flex">
                  <i className="fa-light fa-clock"></i>
                  <select className="nice-select" aria-label="Date Posted">
                    <option selected>Date Posted</option>
                    <option value="1">01 Jan 24</option>
                    <option value="2">05 Feb 24</option>
                    <option value="3">07 Mar 24</option>
                    <option value="4">10 Mar 24</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="rts__btn fill__btn be-1 job__search"
              >
                Search Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSearchForm;
