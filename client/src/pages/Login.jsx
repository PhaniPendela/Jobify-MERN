import React from "react";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components/index.js";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button className="btn btn-block">Explore the App</button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
