import "./Register.css";

import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const Register = () => {
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        userName: userName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`${import.meta.env.VITE_PROXY_AUTH}/register`, user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">ShareSpace</h3>
          <p className="registerDescription">
            Join us in shaping the future of sharing <br />
            and co-creation in the digital world!
          </p>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <label className="registerLabel" htmlFor="text">
              Name
            </label>
            <input
              type="text"
              id="text"
              placeholder="Your name"
              className="registerInput"
              ref={userName}
              required
            />
            <label className="registerLabel" htmlFor="text">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="registerInput"
              ref={email}
              required
            />
            <label className="registerLabel" htmlFor="text">
              Password
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="registerInput"
              ref={password}
              minLength={6}
              required
            />
            <label className="registerLabel" htmlFor="text">
              Repeat Password
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              className="registerInput"
              ref={passwordAgain}
              minLength={6}
              required
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <button className="registerLoginButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
