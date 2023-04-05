import React from "react";
import './LoginComponent.scss';
interface LoginComponentProps {
  handletoogle(): any
}

const LoginComponent: React.FC<LoginComponentProps> = ({ handletoogle }) => {
  return (
    <div className="login-container">
      <h1 className="h3 mb-3 text-center">Please sign in</h1>
      <div className="form-floating mt-5">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mt-4">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mt-4">
        <label className='text-right'>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
        Sign in
      </button>
      <p className='mt-5 text-center' onClick={handletoogle}>Go Back</p>
    </div>
  );
};

export default LoginComponent;
