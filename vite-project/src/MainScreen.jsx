import { useState, useEffect } from 'react'
import NavLink from "./NavElements.jsx";
import './App.css';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';


const MainScreen = () => {
  var header = "Welcome, Team " + Cookies.get('Log');
  const navigate = useNavigate();
  if (Cookies.get('Log') == null || Cookies.get('Log') == "none") {
    useEffect(() => {
      navigate('/login')
    })
  }
  function toPitScouting() {
    navigate('/pitscouting');
  }
  function toStandScouting() {
    navigate('/standscouting');
  }
  function toStats() {
    navigate('/stats');
  }
  function toInfo() {
    navigate('/info');
  }
  function logOut() {
    Cookies.set('Log', null);
  }
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
          {/* Logo Image */}
          <img id="image612" src="/images/logo.jpeg" alt="612 Logo" />
          {/* <NavLink to="/mainscreen" activeStyle>
            <img id="imagehome" src="/images/home.jpg"/>
        </NavLink> */}
        </a>

        <a>
          {/* <button id = "logInButton">Log</button> */}
          <NavLink to="/login" activeStyle onClick={logOut}>
            Log out
          </NavLink>
        </a>
      </div>
    <div id = "navigationpage">
        <h1 id = "scoutingHead">{header}</h1>
        <h2 id = "scoutingHeading2"><b>Choose a function</b></h2>
        <div>
            <button id = "submitButton2" onClick={toPitScouting}>Pit Scouting</button>
            <button id = "submitButton2" onClick={toStandScouting}>Stand Scouting</button>
        </div>
        <div>
            <p class = "text">Add pit-based data</p>
            <p class = "text">Add stand-based data</p>
        </div>
        <div>
            <button id = "submitButton2" onClick={toStats}>Stats</button>
        </div>
        <div>
            <p class = "textor">Check the performance of a certain team.</p>
        </div>
        <div id = "footer">Contact us at chantilly.612@gmail.com for help!</div>
    </div>


        
    </>
  )
  
}

export default MainScreen