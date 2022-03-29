import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";


const SignIn = () => {

  const emailRef = useRef();
  const passRef = useRef();


  const signIn = (e) =>{
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPass = passRef.current.value;
    console.log(enteredEmail);
    console.log(enteredPass);
  }
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
          <input type="text" ref={emailRef}/>
          <h5>Password</h5>
          <input type="password" ref={passRef}/>
          <button type="submit" className="signIn_button" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="signIn_registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default SignIn;
