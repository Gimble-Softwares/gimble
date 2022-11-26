import React from "react";
import "../assets/css/style.css";
import value2 from '../assets/img/values-1.png';
import value1 from '../assets/img/values-2.png';
import value3 from '../assets/img/values-3.png';
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Values = () => {
  const values = [
    {
        label: 'Design',
        image: value1,
    },
    {
        label: 'Development',
        image: value2,
    },
    {
        label: 'Maintainance',
        image: value3,
    },
  ];
  return (
    <>
      <section id="values" className="values section-space">
        <div className="container">
          <header className="section-header">
            <h1>What do we do</h1>
          </header>
          <div className="row">
            {
                values.map((value, index) => {
                    return <Value key={"value "+index} label={value.label} image={value.image}/>;
                })
            }
          </div>
        </div>
      </section>
    </>
  );
};

const Value = ({label, image}) => {
    return (
        <>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                <img
                  src={image}
                  className="img-fluid"
                  alt=""
                />
                <h3>{label}</h3>
              </div>
            </div>
        </>
    );
}

export default Values;
