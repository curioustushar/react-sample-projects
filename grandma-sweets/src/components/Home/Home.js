import React from 'react';

const imgUrl = `linear-gradient(rgba(249, 228, 148, 0.5), rgba(249, 228, 148, 0.5)), url("${process.env.PUBLIC_URL}/img/headerBcg.jpeg")`;
const Home = () => {
  const onExplore = (e) => {
    e.preventDefault();
    const scrollDiv = document.querySelector(`#store`).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
  };
  return (
    <div className="max-height" style={{ backgroundImage: imgUrl }} id="home">
      <div className="banner">
        <h1>
          welcome to <strong className="banner-title ">grandma's</strong>
        </h1>
        <a
          href="/"
          className="btn banner-link text-uppercase my-2"
          onClick={onExplore}
        >
          explore
        </a>
      </div>
    </div>
  );
};

export default Home;
