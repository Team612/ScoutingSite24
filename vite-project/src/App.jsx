// import { useState } from 'react'
import { Link } from 'react-router-dom'; // Import Link for navigation

import './App.css'

//import { LoginPage } from './Login'

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
        <button id = "signUpButton">Sign Up</button>
      </a>
    

      <h1 id = "slash">|</h1>

       {/* Use Link component to navigate to /login */}
       <Link to="/login">
            <button id="logInButton">Login</button>
          </Link>
    </div>
    <div id = "bodypage">
        <img id="firstLogo" src="/src/images/firstR.png" alt="menubar"/>
        <h1 id = "scoutingHead">S C O U T I N G</h1>
        <h2 id = "scoutingHeading2"><b>Powered By 612 Programming</b></h2>
        <img id="teamimage" src="/src/images/img.JPG" alt="menubar"/>
    </div>


        
    </>
  )
  
}

export default App
