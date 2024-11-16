import { Link } from "react-router-dom"; // Import Link from react-router-dom if using React Router
import SignInModal from "../components/SingModal";
import SignUpModal from "../components/SignUpModal";

const Contact = () => {
  return (
    <>
      <SignInModal />
      <SignUpModal />
      {/* Breadcrumb Section */}
      <div className="rts__section breadcrumb__background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
              <div className="breadcrumb__area max-content breadcrumb__padding z-2">
                <h1 className="breadcrumb-title h3 mb-3">Contact</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb m-0 lh-1">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center">
                <div className="shape__one common">
                  <img
                    src="src//assets/img/breadcrumb/shape-1.svg"
                    alt="Shape 1"
                  />
                </div>
                <div className="shape__two common">
                  <img
                    src="src//assets/img/breadcrumb/shape-2.svg"
                    alt="Shape 2"
                  />
                </div>
                <div className="shape__three common">
                  <img
                    src="src/assets/img/breadcrumb/shape-3.svg"
                    alt="Shape 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="rts__section pt-120">
        <div className="container">
          <div className="row g-30">
            {/* Location Box */}
            <div className="col-lg-4 col-md-6">
              <div className="rts__workprocess__box is__contact rounded-3">
                <div className="rts__icon">
                  <img
                    src="src/assets/img/icon/location.svg"
                    alt="Location Icon"
                  />
                </div>
                <span className="process__title h6 d-block">Location Here</span>
                <p className="fw-medium">
                  University of the West Scotland, High Street, Paisley, PA1 2BE
                </p>
              </div>
            </div>

            {/* Email Box */}
            <div className="col-lg-4 col-md-6">
              <div className="rts__workprocess__box is__contact rounded-3">
                <div className="rts__icon">
                  <img src="src/assets/img/icon/mail.svg" alt="Mail Icon" />
                </div>
                <span className="process__title h6 d-block">Email Here</span>
                <a className="text-para fw-medium">
                  b01648521@studentmail.uws.ac.uk
                  b01648519@studentmail.uws.ac.uk
                </a>
              </div>
            </div>

            {/* Phone Box */}
            <div className="col-lg-4 col-md-6">
              <div className="rts__workprocess__box is__contact rounded-3">
                <div className="rts__icon">
                  <img src="src/assets/img/icon/phone.svg" alt="Phone Icon" />
                </div>
                <span className="process__title h6 d-block">Call Here</span>
                <a className="fw-medium text-para">0141 848 3000</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
