import "./Register.css";

import { useNavigate } from "react-router-dom";
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
            <input
              type="text"
              placeholder="Your name"
              className="registerInput"
              ref={userName}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="registerInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Your Password"
              className="registerInput"
              ref={password}
              minLength={6}
              required
            />
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
            <button className="registerLoginButton" type="submit">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
