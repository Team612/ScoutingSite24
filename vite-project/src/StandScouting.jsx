import { useState } from 'react'
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

    <div id = "header">

      <a href="default.asp">
        {/* Logo Image */}
        <img id="image612" src="/src/images/logo.jpeg" alt="612 Logo"/> 
      </a>

      <a>
        <button id = "signUpButton">Log Out</button>
      </a>
  
    </div>
    <div id = "bodypage">
        <h1 id = "scoutingHead">STAND SCOUTING</h1>
        <div>
            <button class = "button1">Match Number</button>
            <input type = "text" class = "button2"></input>
        </div>
        <div>
          <button class = "button1">Team Number</button>
            <input type = "text" class = "button2"></input>
        </div>
        <div>
        <button class = "button1">(Auto) Leave Zone</button>
            <button class = "button-24">No</button>
            <button class = "button-25">Yes</button>
        </div>
        <div>
        <button class = "button1">(Auto) Amp</button>
        <button class = "button-24">-1</button>
           <p id = "speakerId">0</p>
            <button class = "button-25">+1</button>
        </div>
        <div>
           <button class = "button1">(Auto) Speaker</button>
           <button class = "button-24">-1</button>
           <p id = "speakerId">0</p>
            <button class = "button-25">+1</button>
        </div>
        <div>
           <button class = "button1">(Teleop/Engame) Amp</button>
           <button class = "button-24">-1</button>
           <p id = "speakerId">0</p>
            <button class = "button-25">+1</button>
        </div>
        <div>
           <button class = "button1">(Teleop/Endgame) Speaker</button>
           <button class = "button-24">-1</button>
           <p id = "speakerId">0</p>
            <button class = "button-25">+1</button>
        </div>
        <div>
           <button class = "button1">Climb</button>
           <button class = "button-24">No</button>
            <button class = "button-25">Yes</button>
        </div>
        <div>
           <button class = "button1">Trap</button>
           <button class = "button-24">-1</button>
           <p id = "speakerId">0</p>
            <button class = "button-25">+1</button>
        </div>
        <div>
            <button class = "button">SAVE!</button>
        </div>
        <div id = "footer">Contact us at XXX@email.com for help!</div>
    </div>


        
    </>
  )
  
}

export default App