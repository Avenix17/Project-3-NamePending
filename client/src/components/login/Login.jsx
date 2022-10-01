import React, { useState } from "react";
import "./Login.css";
import tack from "../../assets/tack.png";
import { useMutation } from "@apollo/client";
import { LOGIN, CREATE_USER } from "../../utils/mutations.js";

import auth from "../../utils/auth";

function Login() {

  const [loginState, setLoginState] = useState({ email: "", password: "" });
  const [login, { error: loginErr, data: loginData}] = useMutation(LOGIN);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  //submit form
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    console.log(loginState);
    try {
      const { data } = await login({
        variables: { ...loginState },
      });

      auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    //clear form
    setLoginState({
      email: "",
      password: "",
    });
  };

  // Signup logic
  const [signupState, setsignupState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const handleSignupChange = (event) => {
    const { name, value } = event.target;

    setsignupState({
      ...signupState,
      [name]: value,
    });
  };

  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    console.log(signupState);

    try {
      const { data } = await createUser({
        variables: { ...signupState },
      });

      auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex">
      <img className="tack" src={tack} alt="It's a tack!" />
      <div className="user-forms">
        {/* Login Form */}
        <div className="user-login">
          <h1>Login</h1>
          {loginData ? (
            <p>Yippee!</p>
          ) : (
            <form className="sign-in" onSubmit={handleLoginFormSubmit}>
              <div className="input-info">
                <p>Email:</p>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={loginState.email}
                  onChange={handleLoginChange}
                />
              </div>

              <div className="input-info">
                <p>Password:</p>
                <input
                  placeholder="********"
                  name="password"
                  type="password"
                  value={loginState.password}
                  onChange={handleLoginChange}
                />
              </div>

              <div className="button-login">
                <button
                  className="submit-button"
                  type="submit"
                  style={{ cursor: "pointer" }}
                >
                  Login
                </button>{" "}
              </div>
            </form>
          )}

          {loginErr && <div className="error-message">{loginErr.message}</div>}
        </div>

        {/* Signup form */}
        <div className="user-signup">
          <h1>Signup</h1>
          {data ? (
            <p>Yippee!</p>
          ) : (
            <form className="sign-up" onSubmit={handleSignupFormSubmit}>
              <div className="input-info">
                <p>Username:</p>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={signupState.name}
                  onChange={handleSignupChange}
                />
              </div>

              <div className="input-info">
                <p>Email:</p>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={signupState.email}
                  onChange={handleSignupChange}
                />
              </div>

              <div className="input-info">
                <p>Password:</p>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={signupState.password}
                  onChange={handleSignupChange}
                />
              </div>
              <button className="submit-button" type="submit">
                Create User
              </button>
            </form>
          )}

          {error && <div className="error-message">{error.message}</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;
