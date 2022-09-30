import React from "react";
import "./Login.css";
import tack from "../../assets/tack.png";

function Login() {
  return (
    <div className="flex">
      <img className='tack' src={tack} alt="It's a tack!" />
      <h1>Signup or Login</h1>
      <form className="sign-in">
        <div className="input-info">
          <p>Username:</p>
          <input type="text" />
        </div>

        <div className="input-info">
          <p>Password:</p>
          <input type="password" />
        </div>

        <div className="button-login">
          <button className="submit-button" type="submit">
            Login
          </button>
          <p>or</p>
          <button className="submit-button" type="submit">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
