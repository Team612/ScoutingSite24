import React from "react"
import NavLink from "./NavElements.jsx";
import './App.css'
// import NavLink from "./NavElements.jsx"


const PitScoutingPage = () => {
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
        </a>
        <a>
            <NavLink to="/mainscreen" activeStyle id="imageHome">
                <img id="imagehome" src="/src/images/home.jpg"/>
            </NavLink>
        </a>
    </div>
    <div id="pitscoutingpage">
        <h1 id="scoutingHead">Pit Scouting</h1>
        <div id="teamnumber">
            <p id="inputlabel">Team #:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="intake">
            <p id="inputlabel">Intake:</p>
            <textarea type="text" id="textinput" />
        </div>
        <div id="drivetrain">
            <p id="inputlabel">Drive Train:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="climb">
            <p id="inputlabel">Climb:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="autonomous">
            <p id="inputlabel">Autonomous:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="speaker">
            <p id="inputlabel">Speaker:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="amp">
            <p id="inputlabel">Amp:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="trap">
            <p id="inputlabel">Trap:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="drivingskill">
            <p id="inputlabel">Driving Skill:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="weight">
            <p id="inputlabel">{"Weight (lbs):"}</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="cycletime">
            <p id="inputlabel">{"Cycle Time (sec):"}</p>
            <textarea type="text" id="textinput"/>
        </div>
        <div id="other">
            <p id="inputlabel">Other:</p>
            <textarea type="text" id="textinput"/>
        </div>
        <button class="button">SAVE</button>
    </div>
    {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}

    </>
    )
}

export default PitScoutingPage
