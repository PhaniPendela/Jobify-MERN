import React from "react";
import Wrapper from "../assets/wrappers/LandingPage.js";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components/index.js";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="register" className="btn register-link">
            Register
          </Link>
          <Link to="login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Search Jobs" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
