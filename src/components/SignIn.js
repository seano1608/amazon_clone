import React, { useState, useEffect, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import AuthContext from "../context/authContext";

//Reducer declaration
const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }

  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
};

const SignIn = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });
  //Destructured email & password
  const { emailValue: email, passwordValue: password } = state;

  //Form validation
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);
    return () => {
      console.log("Cleanup here");
      clearTimeout(identifier);
    };
  }, [email, password]);

  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  //Sign-in/Login form details
  const Login = (e) => {
    e.preventDefault();
    console.log(formIsValid);
    console.log("Email: ", email, "Password: ", password);
    ctx.onLogin(email, password);
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
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
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
