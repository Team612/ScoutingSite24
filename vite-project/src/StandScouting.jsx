import { useState } from 'react'
import NavLink from "./NavElements.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            <NavLink to="/mainscreen" activeStyle id="imageHome">
                <img id="imagehome" src="/src/images/home.jpg"/>
            </NavLink>
        </a>
    </div>
    <div id = "standscoutingpage">
        <h1 id = "scoutingHead">Stand Scouting</h1>
        <div>
            <button id="button1">Match Number</button>
            <input type = "text" id = "button2"></input>
        </div>
        <div>
          <button id="button1">Team Number</button>
            <input type = "text" id = "button2"></input>
        </div>
        <div>
        <button id="button1">(Auto) Leave Zone</button>
            <button id="button-24">No</button>
            <button id="button-25">Yes</button>
        </div>
        <div>
        <button id="button1">(Auto) Amp</button>
        <button id="button-24">-1</button>
           <p id = "speakerId">0</p>
            <button id="button-25">+1</button>
        </div>
        <div>
           <button id="button1">(Auto) Speaker</button>
           <button id="button-24">-1</button>
           <p id = "speakerId">0</p>
            <button id="button-25">+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Engame) Amp</button>
           <button id="button-24">-1</button>
           <p id = "speakerId">0</p>
            <button id="button-25">+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Endgame) Speaker</button>
           <button id="button-24">-1</button>
           <p id = "speakerId">0</p>
            <button id="button-25">+1</button>
        </div>
        <div>
           <button id="button1">Climb</button>
           <button id="button-24">No</button>
            <button id="button-25">Yes</button>
        </div>
        <div>
           <button id="button1">Trap</button>
           <button id="button-24">-1</button>
           <p id = "speakerId">0</p>
            <button id="button-25">+1</button>
        </div>
        <div>
            <button class = "button">SAVE!</button>
        </div>    
            {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}
        </div>

    </>
  )
  
}

export default App