import React from 'react';
import './about.css';
const About = () => {
  const onExplore = (e) => {
    e.preventDefault();
    const scrollDiv = document.querySelector(`#store`).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <section className="about" id="about">
        <div className="">
          <h1 className="about-title">
            about <strong className="banner-title">us</strong>
          </h1>
          <p className="about-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            aliquam voluptas beatae vitae expedita consectetur nesciunt quia
            deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro
            at dolorum! Ad!
          </p>
          <a href="/" onClick={onExplore} className="btn  btn-black">
            explore
          </a>
        </div>
        <div className="align-self-center">
          <div className="about-img__container">
            <img src="img/sweets-1.jpeg" className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
