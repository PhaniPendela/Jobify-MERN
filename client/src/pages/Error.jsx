import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage.js";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404)
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Page Not Found" className="img" />
          <h3>Ohh! Page Not Found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  return (
    <Wrapper>
      <h3>Something Went Wrong</h3>
    </Wrapper>
  );
};

export default Error;
