import { useState } from 'react'
import './App.css'

const MainScreen = () => {

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
      </a>
      <a>
        <button id = "signUpButton">Sign Out</button>
      </a>
  
    </div>
    <div id = "bodypage">
        <h1 id = "scoutingHead">WELCOME, XXXX</h1>
        <h2 id = "scoutingHeading2"><b>Choose a function</b></h2>
        <div>
            <button class = "button">Pit Scouting</button>
            <button class = "button">Stand Scouting</button>
        </div>
        <div>
            <p class = "text">Add pit-based data</p>
            <p class = "text">Add stand-based data</p>
        </div>
        <div>
            <button class = "button">Stats</button>
            <button class = "button">Info</button>
        </div>
        <div>
            <p class = "text">Look at app data</p>
            <p class = "text">Learn about the app</p>
        </div>
        <div>
            <button class = "button">About Us!</button>
        </div>
        <div>
            <p class = "textor">Learn about 612 Robotics and our mission</p>
        </div>
        <div id = "footer">Contact us at XXX@email.com for help!</div>
    </div>


        
    </>
  )
  
}

export default MainScreen