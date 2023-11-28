import "./Login.css";

import { useRef } from "react";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
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
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
