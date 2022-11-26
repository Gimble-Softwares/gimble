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

const Footer = () => {
  const footerConfig = {
    companyName: "Gimble",
    logo: "assets/img/logo.png",
    description:
      "We offer Modern IT solutions for growing your business considering your specific needs. Trust, Quality & Convinience is our way we work and design the solution @gimble.co.in.",
    socialLinks: [
      {
        label: "facebook",
        link: "",
      },
      {
        label: "twitter",
        link: "",
      },
      {
        label: "instagram",
        link: "",
      },
      {
        label: "linkedin",
        link: "https://www.linkedin.com/company/gimble/",
      },
    ],
    groups: [
      {
        name: "Useful Links",
        links: [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "About Us",
            link: "/about",
          },
          {
            label: "Services",
            link: "/services",
          },
          {
            label: "Terms of Service",
            link: "",
          },
          {
            label: "Privacy policy",
            link: "",
          },
        ],
      },
      {
        name: "Our Services",
        links: [
          {
            label: "Web Design",
            link: "/",
          },
          {
            label: "Web Development",
            link: "/about",
          },
          {
            label: "App Development",
            link: "/services",
          },
          {
            label: "SEO",
            link: "",
          },
          {
            label: "Graphic Design",
            link: "",
          },
        ],
      },
    ],
    address: {
      line1: "Hitech City",
      city: "Hyderabad",
      pincode: "500081",
      state: "Telangana",
      country: "India",
    },
    phone: "9669430311",
    email: "contact@gimble.co.in",
  };
  
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerConfig.logo} alt="" />
                  <span>{footerConfig.companyName}</span>
                </Link>
                <p>{footerConfig.description} <br /> For more information follow us on </p>
                <div className="social-links mt-3">
                  {footerConfig.socialLinks
                    .filter((socialLink) => socialLink.link)
                    .map((socialLink, index) => {
                      return (
                        <>
                          <Link
                            key={"socialLink footer" + index}
                            to={socialLink.link}
                            className={socialLink.label}
                          >
                            <i className={"bi bi-" + socialLink.label} />
                          </Link>
                        </>
                      );
                    })}
                </div>
              </div>
              {footerConfig.groups.map((group, index) => {
                return (
                  <>
                    <div
                      key={group.name + " " + index}
                      className="col-lg-2 col-6 footer-links"
                    >
                      <h4>{group.name}</h4>
                      <ul>
                        {group.links.map((link, index) => {
                          return (
                            <>
                              <li>
                                <i className="bi bi-chevron-right" />{" "}
                                <Link to={link.link}>{link.label}</Link>
                                {/* {link.link ? (
                                  <Link to={link.link}>{link.label}</Link>
                                ) : null} */}
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              })}
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  {footerConfig.address.line1 + ", " + footerConfig.address.city + ", " + footerConfig.address.pincode}
                  <br />
                  {footerConfig.address.state + ", " + footerConfig.address.country} <br />
                  <br />
                  <strong>Phone:</strong> {footerConfig.phone}
                  <br />
                  <strong>Email:</strong> {footerConfig.email}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <span className="copyright">
            © Copyright{" "}
            <strong>
              <span>{footerConfig.companyName}</span>
            </strong>
            . All Rights Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
