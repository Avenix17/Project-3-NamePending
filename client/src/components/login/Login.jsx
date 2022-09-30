import React from "react";
import "./Login.css";
import tack from "../../assets/tack.png";

function Login(opts) {
  return (
    <div className="flex">
      <img className="tack" src={tack} alt="It's a tack!" />
      <div className="user-forms">
        {/* Login Form */}
        <div className="user-login">
          <h1>Login</h1>
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
              <button
                className="submit-button"
                type="submit"
                onClick={() => {
                  opts.setUser("Avyrie");
                }}
              >
                Login
              </button>{" "}
            </div>
          </form>
        </div>

        {/* Signup form */}
        <div className="user-signup">
          <h1>Signup</h1>
          <form className="sign-up">
            <div className="input-info">
              <p>Username:</p>
              <input type="text" />
            </div>

            <div className="input-info">
              <p>Email:</p>
              <input type="email" />
            </div>

            <div className="input-info">
              <p>Password:</p>
              <input type="password" />
            </div>
            <button className="submit-button" type="submit">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
