import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Login.css";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    setEmailError,
    passwordError
  } = props;
  return (
    <Container className="login">
          <div className="login-container">
              <h1 className="login-title">Admin Console</h1>
        <Row>
          <label className="input-label">Username</label>
          <input
            placeholder="Enter your email"
            className="input-text"
            type="text"
            outoffocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label className="input-label">Password</label>
          <input
            placeholder="Enter your password"
            className="input-text"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
        </Row>
        <Row>
          <div className="btn-container">
            {hasAccount ? (
              <>
                <button onClick={handleLogin} className="btn">Sign In</button>
                <p className="errorMsg">Dont have an account? <span onClick={() => setHasAccount(!hasAccount)} className="span">Sign Up</span></p>
              </>
            ) : (
              <>
                <button onClick={handleSignUp} className="btn"> Sign Up </button>
                <p className="errorMsg">Already have an account? <span onClick={ () => setHasAccount(!hasAccount)} className="span">Sign in</span></p>
              </>
            )}
          </div>
        </Row>
      </div>
    </Container>
  );
};
export default Login;
