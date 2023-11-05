import "./Register.css";

const Register = () => {
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
          <div className="registerBox">
            <input
              type="email"
              placeholder="Your Email"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Repeat Password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            <button className="registerLoginButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
