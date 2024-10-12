import React from "react";
import NavLink from "./NavElements.jsx";
import App from "./App";
// import { initializeApp } from "firebase/app";
import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
//root.render(<App/>);
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
          <img id="image612" src="/images/logo.jpeg" alt="612 Logo" />
          {/* <NavLink to="/mainscreen" activeStyle>
            <img id="imagehome" src="/images/home.jpg"/>
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
      <div id="bodypage">
        <img id="firstLogo" src="/images/firstR.png" alt="menubar" />
        <h1 id="scoutingHead">S C O U T I N G</h1>
        <h2 id="scoutingHeading2">
          <b>Powered By 612 Programming</b>
        </h2>
        <img id="teamimage" src="/images/img.JPG" alt="menubar" />
      </div>
    </>
  );
};

export default HomePage;
