import { Link } from "react-router-dom";
import header from "../assets/img/logo/header__one.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../assets/img/JobLogo.png";

function Header() {
  const [isCandidate, setIsCandidate] = useState({});
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsToken(token);
    axios
      .get("https://comp10020-cw2-jobofy-backend.onrender.com/userAuth", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const data = response.data;
        setIsCandidate(data);
      })
      .catch((error) => {
        console.error("Error fetching candidate profile:", error);
      });
  }, [isToken]);

  return (
    <header className="rts__section rts__header absolute__header">
      <div className="container-none">
        <div
          className="rts__menu__background"
          style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
        >
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <div className="rts__logo">
                <img
                  className="logo__image"
                  src={Logo}
                  width="120"
                  height="30"
                  alt="logo"
                />
              </div>
              <div className="rts__menu d-flex gap-5 gap-lg-4 gap-xl-5 align-items-center">
                <div className="navigation d-none d-lg-block">
                  <nav className="navigation__menu" id="offcanvas__menu">
                    <ul className="list-unstyled">
                      <li className="navigation__menu--item ">
                        <Link to="/">
                          <button>Home</button>
                        </Link>
                      </li>
                      <li className="navigation__menu--item ">
                        <Link to="/jobs">
                          <button>Jobs</button>
                        </Link>
                      </li>
                      <li className="navigation__menu--item ">
                        <Link to="/contact">
                          <button>Contact</button>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header__right__btn d-flex gap-3">
                  {isToken ? (
                    <Link
                      to={
                        isCandidate
                          ? "/candidate-dashboard"
                          : "employer-dashboard"
                      }
                    >
                      <button className="small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs">
                        Profile
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs"
                      aria-label="Login Button"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    >
                      <i className="rt-login"></i>Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
