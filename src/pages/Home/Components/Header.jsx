import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Header = () => {
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="index.html">
              Gimble<span>.</span>
            </Link>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <Link to="/" class="logo"><img src="assets/img/logo.png" alt=""></Link>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </>
  );
};

export default Header;
