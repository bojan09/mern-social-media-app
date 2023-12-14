import "./Login.css";

import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

import { createAccount } from "../../constants";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ShareSpace</h3>
          <p className="loginDescription">
            Join us in shaping the future of sharing <br />
            and co-creation in the digital world!
          </p>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <label className="loginLabel" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="loginInput"
              ref={email}
            />
            <label className="loginLabel" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              minLength={6}
              placeholder="Your Password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link className="loginRegisterButtonLink" to={createAccount}>
              <button className="loginRegisterButton">
                {isFetching ? <CircularProgress /> : "Create Account"}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
