import React from "react";
import { initializeApp } from 'firebase/app';
import NavLink from "./NavElements.jsx";
import { getFirestore } from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import './App.css';
import Cookies from 'js-cookie';
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
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
var match1data = "No data";
var match2data = "No data";
var avgperformancestatistics = [];
const StatsPage = () => {
    const navigate = useNavigate();
    function toStandScouting() {
        navigate('/standscouting');
    }
    function toPitScouting() {
        navigate('/pitscouting');
    }
    const [pit, setPit] = useState("No data");
    const [match1, setmatch1] = useState("No data");
    const [match2, setmatch2] = useState("No data");
    const [avgstatistcs, setavgstatistics] = useState("No data");
    async function StatsMatchesGet(query, match) {
        // console.log("Team ID:", teamID, "Password", password);
        const docRef = doc(db, Cookies.get('Log'), "ScoutData_" + query + "_" + match);
        console.log(Cookies.get('Log'));
        console.log("ScoutData_" + query + "_" + match);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                // console.log(window.location.pathname);
                console.log(docSnap);
            } else {
                console.log("No such document!");
                return false;
            }
            console.log(docSnap.data()["AAmp"]);
            let data = docSnap.data();
            console.log(data);
            return "Autonomous Amp: " + data["AAmp"] + "\nLeft Zone: " + data["ALeave"] + "\nAutonomous Speaker: " + data["ASpeaker"] + "\nMatch: " + data["Match"] + "\nTeleop Amp: " + data["TAmp"] + "\nTeleop Speaker: " + data["TSpeaker"] + "\nTeam #: " + data["Team"] + "\nTrap: " + data["trap"] + "\nClimb: " + data["climb"];
    }
    async function StatsPitDataGet(query) {
        // console.log("Team ID:", teamID, "Password", password);
        const docRef = doc(db, Cookies.get('Log'), "PitData_" + query);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // console.log(window.location.pathname);
          // console.log(docSnap.data());
        } else {
          console.log("No such document!");
          pitdata = "No data";
          return false;
        }
        console.log(docSnap.data()["Amp"]);
        let data = docSnap.data();
        console.log(data);
        pitdata = "Amp: " + data["Amp"] + "\nAutonomous: " + data["Autonomous"] + "\nClimb: " + data["Climb"] + "\nCycle Time: " + data["Cycle Time"] + " lbs\nDrivetrain: " + data["Drivetrain"] + "\nDriving Skill: " + data["Driving Skill"] + "\nIntake: " + data["Intake"] + "\nOther: " + data["Other"] + "\nSpeaker: " + data["Speaker"] + "\nTeam #: " + data["Team"] + "\nTrap: " + data["Trap"] + "\nWeight: " + data["Weight"] + " lbs";
        console.log(pitdata);
        setPit(pitdata);
        console.log(pit);
    }
    async function handleSubmit(e) {
        // if (formJson["query"] == "" || formJson["query"] == null){
        //     return 1;
        // }
        // if (formJson["query2"] == "" || formJson["query2"] == null){
        //     return 2;
        // }
        e.preventDefault();
        setmatch1("Loading...");
        setmatch2('Loading...');
        setPit('Loading...');
        setavgstatistics('Loading...');
        const form = e.target;
        const formData = new FormData(form);
        fetch('/some-api', { method: form.method, body: formData });
        const formJson = Object.fromEntries(formData.entries());
        await StatsPitDataGet(formJson["query"]);
        var matches = await StatsMatchesGet(formJson["query"], formJson["query2"]);
        setmatch1(matches);
        avgperformancestatistics = [];
        avgperformancestatistics.push((Number(match1data.split("\n")[0].split(": ")[1]) + Number(match2data.split("\n")[0].split(": ")[1]))/2);
        avgperformancestatistics.push((Number(match1data.split("\n")[2].split(": ")[1]) + Number(match2data.split("\n")[2].split(": ")[1]))/2);
        avgperformancestatistics.push((Number(match1data.split("\n")[4].split(": ")[1]) + Number(match2data.split("\n")[4].split(": ")[1]))/2);
        avgperformancestatistics.push((Number(match1data.split("\n")[5].split(": ")[1]) + Number(match2data.split("\n")[5].split(": ")[1]))/2);
        avgperformancestatistics.push((Number(match1data.split("\n")[7].split(": ")[1]) + Number(match2data.split("\n")[7].split(": ")[1]))/2);
        console.log(avgperformancestatistics);
        setavgstatistics("Autonomous Amp: " + avgperformancestatistics[0] + "\nAutonoumous Speaker: " + avgperformancestatistics[1] + "\nTeleop Amp: " + avgperformancestatistics[2] + "\nTeleop Speaker: " + avgperformancestatistics[3] + "\nTrap: " + avgperformancestatistics[4]);
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
        <img id="image612" src="/images/logo.jpeg" alt="612 Logo"/>
      </a>
      <a>
            <NavLink to="/mainscreen" activeStyle id="imageHome">
                <img id="imagehome" src="/images/home.jpg"/>
            </NavLink>
        </a>
    </div>
    <div id="statspage">
        <h1 id="scoutingHead">Stats</h1>
        <p class = "koholo">Please enter both a valid match and a team number when you search.</p>
        <form onSubmit={handleSubmit}>
        <h2 class = "lopop">Search: <input type="text" id="searchbar" placeholder="Search" name="query"/></h2>
        <h2 class = "lopop">Match Search: <input type="text" id="searchbar" placeholder="Search" name="query2"/></h2>
        <button type = "submit" class = "butoj">Search</button>
        </form>
        <div className="button-container">
            <button className="statsbutton">Matches Data</button>
            <p class = "lopop"> {match1.split("\n").map((line, index) => (
                <div key={index} className="c">
                    {line}
                    <br />
                </div>
                ))}
            </p>
            <button className="statsbutton">Pit Data</button>
            <p class = "lopop"> {pit.split("\n").map((line, index) => (
                <div key={index} className="c">
                    {line}
                    <br />
                </div>
                ))}
            </p>
            {/* <button className="statsbutton">Average Performance Statistics</button>
            <p> {avgstatistcs.split("\n").map((line, index) => (
                <div key={index} className="c">
                    {line}
                    <br />
                </div>
                ))}
            </p> */}
        </div>
    </div>
    {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}
    </>
    )
}
export default StatsPage;