import React from "react"
import { useState } from 'react'
import NavLink from "./NavElements.jsx";
import './App.css';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {doc, getDoc, setDoc} from "firebase/firestore";
import Cookies from 'js-cookie';
// import NavLink from "./NavElements.jsx"

const firebaseConfig = {
    apiKey: "AIzaSyAmnVQ0fKgFbjrzKSkaAi_mHBV0Xf5tDkg",
    authDomain: "scoutingsite-9ed91.firebaseapp.com",
    projectId: "scoutingsite-9ed91",
    storageBucket: "scoutingsite-9ed91.appspot.com",
    messagingSenderId: "707000861764",
    appId: "1:707000861764:web:8494cda0b57782c5cf2811"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PitScoutingPage = () => {
    const navigate = useNavigate();
      if (Cookies.get('log') == null) {
        navigate('/login')
      }
    async function PitScoutingDataAdd(array1) {
        console.log(Cookies.get('Log'));
        await setDoc(doc(db, Cookies.get('Log'), "PitData_" + array1["Team"]), {
            "Team" : array1["Team"],
            "Intake": array1["Intake"],
            "Drivetrain": array1["Drivetrain"],
            "Climb": array1["Climb"],
            "Autonomous": array1["Autonomous"],
            "C": array1["C"],
            "Al":array1["Al"],
            "AS": array1["AS"],
            "Weight": array1["Weight"],
            "Cycle Time": array1["Cycle Time"],
            "Other": array1["Other"]
          });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        fetch('/some-api', { method: form.method, body: formData });
        const formJson = Object.fromEntries(formData.entries());
        console.log("FormJson" + formJson["Team"]);
        PitScoutingDataAdd(formJson);
        // alert("Saved! Go back to main page.");
    }

    const [saveMessage, setSaveMessage] = useState("");

    function SaveAlert() {
        setSaveMessage("✅ Data Saved Successfully!");
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

    <div id = "header">
        <a href="/">
            {/* Logo Image */}
            <img id="image612" src="/images/logo.jpeg" alt="612 Logo"/> 
        </a>
        <a>
            <NavLink to="/mainscreen" activeStyle id="imageHome">
                <img id="imagehome" src="/images/home.jpg"/>
            </NavLink>
        </a>
    </div>
    <div id="pitscoutingpage">
        <h1 id="scoutingHead">Pit Scouting</h1>
        <form onSubmit={handleSubmit}>
        <div id="teamnumber">
            <p id="inputlabel">Team #:</p>
            <textarea type="text" id="textinput" name="Team"/>
        </div>
        <div id="intake">
            <p id="inputlabel">Intake:</p>
            <textarea type="text" id="textinput" name="Intake"/>
        </div>
        <div id="drivetrain">
            <p id="inputlabel" >Drive Train:</p>
            <textarea type="text" id="textinput" name="Drivetrain"/>
        </div>
        <div id="climb">
            <p id="inputlabel" >Climb:</p>
            <textarea type="text" id="textinput" name="Climb"/>
        </div>
        <div id="autonomous">
            <p id="inputlabel">Autonomous:</p>
            <textarea type="text" id="textinput" name="Autonomous"/>
        </div>
        <div id="speaker">
            <p id="inputlabel">Coral Capability:</p>
            <textarea type="text" id="textinput" name="C"/>
        </div>
        <div id="amp">
            <p id="inputlabel">Algae Removal:</p>
            <textarea type="text" id="textinput" name="Al"/>
        </div>
        <div id="trap">
            <p id="inputlabel">Algae Scoring:</p>
            <textarea type="text" id="textinput" name="AS"/>
        </div>
        <div id="weight">
            <p id="inputlabel">{"Weight (lbs):"}</p>
            <textarea type="text" id="textinput" name="Weight"/>
        </div>
        <div id="cycletime">
            <p id="inputlabel">{"Cycle Time (sec):"}</p>
            <textarea type="text" id="textinput" name="Cycle Time"/>
        </div>
        <div id="other">
            <p id="inputlabel">Other:</p>
            <textarea type="text" id="textinput" name="Other"/>
        </div>
        {saveMessage && <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>{saveMessage}</p>}
        <button class="button" onClick={() => {SaveAlert();}}>SAVE</button>
        </form>
    </div>
    {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}

    </>
    )
}

export default PitScoutingPage
