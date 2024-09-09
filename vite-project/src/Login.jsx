import { useState } from 'react'
//import LoginPage from './Login'
// import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.css'
import NavLink from "./NavElements.jsx";

  

const LoginPage = () => {
  return (
    <>
    
     {/* Montseratt Font: Headings */}
     <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    {/* Bebas Neue Font: Subheading */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    {/* Outfit Font: Paragraph Website Text */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
    {/* Josefin Sans: Button Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>

    <div id="header">
      <a href="/">
        <img id="image612" src="/src/images/logo.jpeg" alt="612 Logo"/>
      </a>
      <a>
            {/* <NavLink to="/mainscreen" activeStyle id="imageHome"> */}
                {/* <img id="imagehome" src="/src/images/home.jpg"/> */}
            {/* </NavLink> */}
        </a>
    </div>

    <div id = "loginpage">
      <h1>Login</h1>
      <div id="login">
        <h2 id="signUph2">Team ID:    </h2>
          <input type="text" id="button2" placeholder="Team ID #" />
      </div>
      <div id="login">
      <h2 id="signUph2">Password:   </h2>
          <input type="password" id="button2" placeholder="Password" />
        </div>
        <button id="submitButton">Submit</button>
        <div id="forgotPassword">Forgot Password?</div>
    </div>
    </>
  )
}

export default LoginPage;


