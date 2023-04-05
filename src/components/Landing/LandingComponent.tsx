import React, { useState } from "react";
import LoginComponent from '../Login/LoginComponent';
import "./LandingComponent.scss";
import { Link } from 'react-router-dom';

interface LandingComponentProps {}

const LandingComponent: React.FC<LandingComponentProps> = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handletoogle = () => {
    setShowLogin(s => !s);
  }
  return (
    <section className="landing-container d-flex justify-content-center align-items-center" id="landing-container">
      <div className='landing-backdrop' />
      {showLogin
        ? <LoginComponent handletoogle={handletoogle} />
        : (<div className='landing-content'>
            <h1> Welcome to our car mechanic website!</h1>
            <br />
            <p>At our shop, we offer a full range of car repair and maintenance services to keep your vehicle running smoothly</p>
            <p>Our team of experienced mechanics is dedicated to providing you with the best possible service, using only the highest quality parts and equipment. Whether you need a simple oil change or a major engine repair, we have the knowledge and expertise to get the job done right.</p>
            <div className='d-flex justify-content-center'>
              <Link className='btn btn-primary btn-lg' to='/ourservice'>Our Service</Link>
            </div>
          </div>)
      }
    </section>
  );
};

export default LandingComponent;
