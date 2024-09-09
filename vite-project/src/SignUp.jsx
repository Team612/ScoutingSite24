import { useState } from "react";
import "./App.css";
import NavLink from "./NavElements.jsx";

const SignUpPage = () => {
  return (
    <>
      {/* Montseratt Font: Headings */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* Bebas Neue Font: Subheading */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* Outfit Font: Paragraph Website Text */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* Josefin Sans: Button Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      ></link>

      <div id="header">
        <a href="/">
          <img id="image612" src="/src/images/logo.jpeg" alt="612 Logo" />
        </a>
        <a>
            <NavLink to="/mainscreen" activeStyle id="imageHome">
                <img id="imagehome" src="/src/images/home.jpg"/>
            </NavLink>
        </a>
      </div>

      <div id="signuppage">
        <h1>SignUp</h1>
        <div class="signup">
          <h2 id="signUph2">Create Team ID:</h2>
          <input type="text" id="signUpInput" placeholder="Team ID #" />
        </div>
        <div class="signup">
          <h2 id="signUph2">Create Password:</h2>
          <input type="password" id="signUpInput" placeholder="Password" />
        </div>
        <div class="signup">
          <h2 id="signUph2">Retype Password:</h2>
          <input type="password" id="signUpInput" placeholder="Password" />
        </div>
        <p>
          DO NOT MAKE AN ACCOUNT FOR A TEAM YOU ARE NOT A PART OF, IF YOUR
          TEAM’s ACCOUNT IS ALREADY TAKEN, Contact us at chantilly.612@gmail.com to get
          your account back. Until then, you may use any combination of letters
          in your team number in place of your team number.
        </p>
        <button id="submitButton">Sign Up</button>
        <div id="forgotPassword">Forgot Password?</div>
      </div>
    </>
  );
};

export default SignUpPage;
