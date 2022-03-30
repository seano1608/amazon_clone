import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("effect running");
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);

    return () => {
      console.log("cleanup function before next use effect");
      clearTimeout(identifier);
    };
  }, [email, password]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  //Sign-in/Login form details
  const Login = (e) => {
    e.preventDefault();
    console.log(formIsValid);
  };


  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={emailChangeHandler} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={passwordChangeHandler} />
          <button type="submit" className="signIn_button" onClick={Login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="signIn_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default SignIn;
