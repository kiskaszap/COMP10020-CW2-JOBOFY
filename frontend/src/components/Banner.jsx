import bannershape from "@/assets/img/home-1/banner/image_2x.webp"

const Banner = () => {
  return (
    <section className="rts__banner home__one__banner pt-260">
      <div className="rts__banner__background">
        <div className="shape__home__one __first d-none d-lg-block">
          <img src="src/assets/img/home-1/banner/banner-shape.svg" alt="" />
        </div>
        <div className="shape__home__one __second d-none d-lg-block">
          <img src={bannershape} alt="" />
        </div>
        <div className="shape__home__one __third"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="rts__banner__wrapper d-flex gap-4 justify-content-between">
            <div className="rts__banner__content">
              <h1 className="rts__banner__title wow animated fadeInUp">
                Find Your Dream Job With <span>Jobofy</span>
              </h1>
              <p
                className="rts__banner__desc my-40 wow animated fadeInUp"
                data-wow-delay=".1s"
              >
                Are you looking for a new job or a change in your career? Find a
                job that you love and apply for it today!
              </p>
            </div>
            <div className="rts__banner__image position-relative">
              <figure className="banner__image">
                <img
                  src="src/assets/img/home-1/banner/image_2x.webp"
                  alt="banner"
                />
              </figure>
              <div className="banner__image__shape">
                <div className="facebook">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="twitter">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
