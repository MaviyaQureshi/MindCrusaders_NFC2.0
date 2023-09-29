import React, { useEffect } from "react";
import "./login.css";


const Login = () => {
  useEffect(() => {
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");
    const main = document.getElementById("main");

    signUpButton.addEventListener("click", () => {
      main.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      main.classList.remove("right-panel-active");
    });
  }, []);

  return (
    <div className="log-container">
      <div className="login-div">
        <div className="tagline">
          <img src={null} width={60} height={60}></img>
          <header>TaxSage</header>
        </div>
        <div className="container" id="main">
          <div className="sign-up-div">
            <form action="#">
              <h1>Sign Up</h1>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter email" />
              <input type="password" placeholder="Enter password" />
              <input type="password" placeholder="Enter your PAN CARD NUMBER" />
              <input type="email" placeholder="Enter your email" />
              <button className="sign-button">Sign Up!</button>
            </form>
          </div>
          <div className="sign-in-div">
            <form action="#">
              <h1>Sign In</h1>
              <input type="email" placeholder="Enter email" />
              <input type="password" placeholder="Enter password" />
                <button className="sign-button">Sign In!</button>
              <span>
                Forgot your password?<a href="#">Click here</a>
              </span>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1>Continue your savings</h1>
                <span> sign in now</span>
                <button className="sign-button" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-right">
                <h1>Sign up and Save your hard earned money</h1>
                <span>Sign Up and Save</span>
                <button className="sign-button" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;