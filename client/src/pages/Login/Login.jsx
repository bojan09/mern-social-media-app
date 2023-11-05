import "./Login.css";

const Login = () => {
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
          <div className="loginBox">
            <input
              type="email"
              placeholder="Your Email"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
