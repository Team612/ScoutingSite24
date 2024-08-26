import React from "react";
import NavLink from "./NavElements.jsx"
import './App.css'
const StatsPage = () => {
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

      <a href="/">
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
    <div id="statspage">
        <h1>Stats</h1>
        <h2>Search: <input type="text" id="searchbar" placeholder="Search" /></h2>
        <div className="button-container">
            <button className="statsbutton">Match 1</button>
            <button className="statsbutton">Match 2</button>
            <button className="statsbutton" id="buttonspacing">Pit Data</button>
            <button className="statsbutton">Average Performance Statistics</button>
        </div>
    </div>
    
    </>
    )
}
export default StatsPage;