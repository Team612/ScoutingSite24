import React from "react";
import NavLink from "./NavElements.jsx";
// import { initializeApp } from "firebase/app";

const HomePage = () => {
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
          {/* Logo Image */}
          <img id="image612" src="/src/images/logo.jpeg" alt="612 Logo" />
          {/* <NavLink to="/mainscreen" activeStyle>
            <img id="imagehome" src="/src/images/home.jpg"/>
        </NavLink> */}
        </a>

        <a>
          {/* <button id = "logInButton">Login</button> */}
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
        </a>
      </div>
      <div id="homeNavBar">
        <ul id ="homeNavBarButtonsGroup">
        <li><NavLink to="/signup" isClassInput id="homebarButtons">
          Sign Up
        </NavLink></li>
        <li><NavLink to="/pitscouting" isClassInput id="homebarButtons">
          Pit Scouting Page
        </NavLink></li>
        <li><NavLink to="/standscouting" isClassInput id="homebarButtons">
          Stand Scouting Page
        </NavLink></li>
        <li><NavLink to="/stats" isClassInput id="homebarButtons">
          Stats Page
        </NavLink></li>
        </ul>
      </div>
      <div id="bodypage">
        <img id="firstLogo" src="/src/images/firstR.png" alt="menubar" />
        <h1 id="scoutingHead">S C O U T I N G</h1>
        <h2 id="scoutingHeading2">
          <b>Powered By 612 Programming</b>
        </h2>
        <img id="teamimage" src="/src/images/img.JPG" alt="menubar" />
      </div>
    </>
  );
};

export default HomePage;
