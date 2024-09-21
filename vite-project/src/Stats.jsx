import React from "react";
import { initializeApp } from 'firebase/app';
import NavLink from "./NavElements.jsx";
import { getFirestore } from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import './App.css';
import Cookies from 'js-cookie';
import { useState } from "react";
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
  var pitdata = "No data";
  
const StatsPage = () => {
    var [pit1, setPit1] = useState("No data");
    var [pit2, setPit2] = useState("No data");
    var [pit3, setPit3] = useState("No data");
    var [pit4, setPit4] = useState("No data");
    var [pit5, setPit5] = useState("No data");
    var [pit6, setPit6] = useState("No data");
    var [pit7, setPit7] = useState("No data");
    var [pit8, setPit8] = useState("No data");
    var [pit9, setPit9] = useState("No data");
    var [pit10, setPit10] = useState("No data");
    var [pit11, setPit11] = useState("No data");
    var [pit12, setPit12] = useState("No data");

    var match1data = "No data";
    var match2data = "No data";
    async function StatsPitDataGet(query) {
        const docRef = doc(db, Cookies.get('Log'), "PitData 9072");
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        var data = docSnap.data()
        var Amp = data["Amp"]
        var Autonomous = data["Autonomous"]
        var Climb = data["Climb"]
        var Cycle_Time = data["Cycle Time"]
        var Drivetrain = data["Drivetrain"]
        var Driving_Skill = data["Driving Skill"]
        var Intake = data["Intake"]
        var other = data["Other"]
        var Speaker = data["Speaker"]
        var Team = data["Team"]
        var Trap = data["Trap"]
        var weight = data["Weight"]
        setPit1("Speaker: " + Speaker)
        setPit2("Amp: " + Amp)
        setPit3("Auto: " + Autonomous)
        setPit4("Climb: " + Climb)
        setPit5("Cycle: " + Cycle_Time)
        setPit6("Intake: " + Intake)
        setPit7("Skill: " + Driving_Skill)
        setPit8("Other: " + other)
        setPit9("Team: " + Team)
        setPit10("Trap: " + Trap)
        setPit11( "Weight: " + weight)
        setPit12("Drivetrain: " + Drivetrain);
    }

    function handleSubmit(e){
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      fetch('/some-api', { method: form.method, body: formData });
      const formJson = Object.fromEntries(formData.entries());
      StatsPitDataGet(formJson["query"]);
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
        <img id="image612" src="/src/images/logo.jpeg" alt="612 Logo"/>
      </a>
      <a>
            <NavLink to="/mainscreen" activeStyle id="imageHome">
                <img id="imagehome" src="/src/images/home.jpg"/>
            </NavLink>
        </a>
    </div>
    <div id="statspage">
        <h1 id="scoutingHead">Stats</h1>
        <form onSubmit={handleSubmit}>
          <h2>Search: <input type="text" id="searchbar" placeholder="Search" name="query"/></h2>
          <button>Go!</button>
        </form>
        <div className="button-container">
            <button className="statsbutton">Match 1</button>
            <p>{match1data}</p>
            <button className="statsbutton">Match 2</button>
            <p>{match2data}</p>
            <button className="statsbutton">Other Matches</button>
            <button className="statsbutton" id="buttonspacing">Pit Data</button>
            <p class = "c">{pit1}</p>
            <p class = "c">{pit2}</p>
            <p class = "c">{pit3}</p>
            <p class = "c">{pit4}</p>
            <p class = "c">{pit5}</p>
            <p class = "c">{pit6}</p>
            <p class = "c">{pit7}</p>
            <p class = "c">{pit8}</p>
            <p class = "c">{pit9}</p>
            <p class = "c">{pit10}</p>
            <p class = "c">{pit11}</p>
            <p class = "c">{pit12}</p>
            <button className="statsbutton">Average Performance Statistics</button>
            <p></p>
        </div>
    </div>
    {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}
    </>
    )
}
export default StatsPage;