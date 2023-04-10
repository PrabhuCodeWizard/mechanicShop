import React from "react";
import { Link } from "react-router-dom";
// style
import "./LandingComponent.scss";

interface LandingComponentProps {}

const LandingComponent: React.FC<LandingComponentProps> = () => {

  return (
    <section
      className="landing-container d-flex justify-content-center align-items-center"
      id="landing-container"
    >
      <div className="landing-backdrop" />
      <div className="landing-content">
        <h1> Welcome to our car mechanic website!</h1>
        <br />
        <p>
          At our shop, we offer a full range of car repair and maintenance
          services to keep your vehicle running smoothly
        </p>
        <p>
          Our team of experienced mechanics is dedicated to providing you with
          the best possible service, using only the highest quality parts and
          equipment. Whether you need a simple oil change or a major engine
          repair, we have the knowledge and expertise to get the job done right.
        </p>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-primary btn-lg" to="/ourservice">
            Our Service
          </Link>
          <Link className="btn btn-primary btn-lg ms-4" to="/feedback">
            FeedBack
          </Link>
        </div>
      </div>{" "}
    </section>
  );
};

export default LandingComponent;
