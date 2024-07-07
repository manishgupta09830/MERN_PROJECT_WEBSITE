import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Your ShopKeeper</h3>
        <div>
          <h1>Your Place For All Your Material</h1>
          <p>
            We believe that it is all about the Needs and the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            GET NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;