import React from "react";
import "../assets/css/style.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Services = () => {
  const services = [
    {
      heading: "Websites",
      description:
        "We ensure that our client’s website and applicaition is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, &amp; orientation.",
      colorOnHover: 'blue',
    },
    {
      heading: "App Development",
      description:
        "Our custom web and application development services include both front-end and back-end development. Whether it is enhancing an existing application or architecting an enterprise application or website, our developers are up for the challenge.",
      colorOnHover: 'orange',
    },
    {
      heading: "Web Apps",
      description:
        "Part of our custom web development services includes on-going support and maintenance. Our process enables us to review all webpages, health checks, and even optimization to provide you with the best opportunity to gain additional incremental traffic.",
      colorOnHover: 'green',
    },
  ];
  return (
    <>
      <section id="services" className="services section-space">
        <div className="container">
          <header className="section-header">
            <p>Our Services</p>
          </header>
          <div className="row gy-4">
            {services.map((service, index) => {
              return (
                <Service
                  key={"service" + index}
                  heading={service.heading}
                  description={service.description}
                  colorOnHover={service.colorOnHover}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const Service = ({ heading, description, colorOnHover }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className={"service-box " + colorOnHover}>
          <h3>{heading}</h3>
          <p>{description}</p>``
        </div>
      </div>
    </>
  );
};

export default Services;
