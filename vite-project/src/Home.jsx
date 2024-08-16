
import React from "react";
import NavLink from "./NavElements.jsx"

const HomePage = () => {
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

    <div id = "header">

      <a href="default.asp">
        {/* Logo Image */}
        <img id="image612" src="/src/images/logo.jpeg" alt="612 Logo"/> 
        <NavLink to="/mainscreen" activeStyle>
            <img id="imagehome" src="/src/images/home.jpg"/>
        </NavLink>
      </a>

      <a>
        <button id = "signUpButton">Sign Up</button>
      </a>
    

      <h1 id = "slash">|</h1>

      <a>
        {/* <button id = "logInButton">Login</button> */}
        <NavLink to="/login" activeStyle>
          Login
        </NavLink>
        
      </a>
    </div>
    <div id = "bodypage">
        <img id="firstLogo" src="/src/images/firstR.png" alt="menubar"/>
        <h1 id = "scoutingHead">S C O U T I N G</h1>
        <h2 id = "scoutingHeading2"><b>Powered By 612 Programming</b></h2>
        <img id="teamimage" src="/src/images/img.JPG" alt="menubar"/>
    </div>
    <div id = "bodypage">
    <button id = "input">Sign Up Page</button>
    <a>
      {/* <button id = "input">Pit Scouting Page</button> */}
      <NavLink to ="/pitscouting" isClassInput>
        Pit Scouting Page
      </NavLink>
    </a>
    <button id = "input">Stand Scouting Page</button>
    <button id = "input">Stats Page</button>
    </div>
        </>
    );
};

export default HomePage