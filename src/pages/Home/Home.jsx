import React from "react";
import "./assets/css/style.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./style.css";

import Ads from "./Components/Ads.jsx";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services";
import Values from "./Components/Values";

const Home = () => {
  return (
    <div>
      <Hero />
      <main id="main">
        <Values />
        <Ads />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
