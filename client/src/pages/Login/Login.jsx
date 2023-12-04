import "./Login.css";

import { useContext, useRef } from "react";
import { loginCall } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(user);
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
            <input
              type="email"
              placeholder="Your Email"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              minLength={6}
              placeholder="Your Password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">
              {isFetching ? <CircularProgress /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
