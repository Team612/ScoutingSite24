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
var number = "";

const StatsPage = () => {
    const navigate = useNavigate();
      if (Cookies.get('log') == null) {
        navigate('/login')
      }
    function toStandScouting() {
        navigate('/standscouting');
    }
    function toPitScouting() {
        navigate('/pitscouting');
    }
    const [pit, setPit] = useState("No data");
    const [match1, setmatch1] = useState("No data");
    // const [match2, setmatch2] = useState("No data");
    const [avgstatistcs, setavgstatistics] = useState("No data");
    // const [num, setnum] = useState("#");
    const [q, setq] = useState("");

    async function StatsPitDataGet(query) {
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
        let data = docSnap.data();
        console.log(data);
        pitdata = "Algae Removal: " + data["Al"] + "\nAutonomous: " + data["Autonomous"] + "\nClimb: " + data["Climb"] + "\nCycle Time: " + data["Cycle Time"] + " \nDrivetrain: " + data["Drivetrain"] + "\nIntake: " + data["Intake"] + "\nOther: " + data["Other"] + "\nCoral Capability: " + data["C"] + "\nTeam #: " + data["Team"] + "\nAlgae Scoring: " + data["AS"] + "\nWeight: " + data["Weight"] + " lbs";
        console.log(pitdata);
        setPit(pitdata);
        console.log(pit);
    }

    async function StatsMatchDataGet(query){
        var allData = "";
        var totalAlgae = 0;
        var totalLeaveZones = 0;
        var totalL1 = 0;
        var totalL2 = 0;
        var totalL3 = 0;
        var totalL4 = 0;
        var totalPClimb = 0;
        var totalDClimb = 0;
        var totalSClimb = 0;
        var totalMatches = 0;
        var totalRP = 0;

        console.log("its happening");

        for (var i = 0; i < 50; i ++){
            console.log("ScoutData_" + query + "_" + i);
            const docRef = doc(db, Cookies.get('Log'), "ScoutData_" + query + "_" + i);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            // console.log(window.location.pathname);
            // console.log(docSnap.data());
                let data = docSnap.data();
                console.log(data);

                if(data["ALeave"]){
                    totalLeaveZones += 1
                }
                if(data["PClimb"] === "Yes"){
                    totalPClimb += 1
                }
                if(data["SClimb"] === "Yes"){
                    totalSClimb += 1
                }
                if(data["DClimb"] === "Yes"){
                    totalDClimb += 1
                }

                if(data["BP"] === "Yes"){
                    totalRP += 1
                }
                if(data["CP"] === "Yes"){
                    totalRP += 1
                }
                if(data["AutoRP"] === "Yes"){
                    totalRP += 1
                }
                totalMatches += 1;
                totalAlgae += (data["ASN"] + data["AAlgae"] + data["APS"]);
                totalL1 += (data["L1AC"] + data["L1C"]);
                totalL2 += (data["L2AC"] + data["L2C"]);
                totalL3 += (data["L3AC"] + data["L3C"]);
                totalL4 += (data["L4AC"] + data["L4C"]);
            

                if(data["ALeave"]){
                    totalLeaveZones += 1
                }
 


                allData += "MATCH #" + data["Match"] + 
                "\nL1 Coral Auto: " + data["L1AC"] +
                "\nL2 Coral Auto: " + data["L2AC"] +
                "\nL3 Coral Auto: " + data["L3AC"] +
                "\nL4 Coral Auto: " + data["L4AC"] +
                "\nL1 Coral: " + data["L1C"] +
                "\nL2 Coral: " + data["L2C"] +
                "\nL3 Coral: " + data["L3C"] +
                "\nL4 Coral" + data["L4C"] +
                "\nLeft Zone: " + data["ALeave"] + 

                "\nAlgae Processor: " + data["APS"] + 
                "\nAlgae Net: " + data["ASN"] + 
                "\nAlgae Auto: " + data["AAlgae"] + 
                "\nPark: " + data["PClimb"] + 
                "\nDeep: " + data["DClimb"] + 
                "\nShallow: " + data["SClimb"] + 
                "\nMatch: " + data["Match"] + 


                "\nOther: " + data["other"] + 
                "\nPosition: " + data["position"] + 
                "\nSkill: " + data["skill"] + 
                "\n\n";

                setmatch1(allData);
            } 
            else {
                
            }

        } 
        console.log((totalPClimb + totalDClimb + totalSClimb));

        var avgdata =  
        "Avg L1 per match: " + totalL1/totalMatches + "\n" + 
        "Avg L2 per match: " + totalL2/totalMatches + "\n" + 
        "Avg L3 per match: " + totalL3/totalMatches + "\n" + 
        "Avg L4 per match: " + totalL4/totalMatches + "\n" +
        "Avg algae per match: " + totalAlgae/totalMatches + "\n" +  
        "Leave Zone %: " + totalLeaveZones/totalMatches + "\n" +
        "Climb %: " + (totalPClimb + totalDClimb + totalSClimb)/totalMatches + "\n";
        setavgstatistics(avgdata);
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
        setPit('Loading...');
        const form = e.target;
        const formData = new FormData(form);
        fetch('/some-api', { method: form.method, body: formData });
        const formJson = Object.fromEntries(formData.entries());
        if (formJson["query"] == "") {
            setq("\nThere is no team to search for.");
            return false;
        }

        StatsPitDataGet(formJson["query"]);
        StatsMatchDataGet(formJson["query"]);
        // setq("");
        // await StatsPitDataGet(formJson["query"]);
        // if (formJson["match"] != "") {
        //     var matches = await StatsMatchesGet(formJson["query"], formJson["match"]);
        //     if (!matches) {
        //         setmatch1("The team did not play in this match.");
        //         return false;
        //     }
        //     setnum(formJson["match"]);
        //     setmatch1(matches);
        // } else {
        //     setmatch1("No match number given.");
        // }
        // setmatch1(matches);
        // avgperformancestatistics = [];
        // avgperformancestatistics.push((Number(match1data.split("\n")[0].split(": ")[1]) + Number(match2data.split("\n")[0].split(": ")[1]))/2);
        // avgperformancestatistics.push((Number(match1data.split("\n")[2].split(": ")[1]) + Number(match2data.split("\n")[2].split(": ")[1]))/2);
        // avgperformancestatistics.push((Number(match1data.split("\n")[4].split(": ")[1]) + Number(match2data.split("\n")[4].split(": ")[1]))/2);
        // avgperformancestatistics.push((Number(match1data.split("\n")[5].split(": ")[1]) + Number(match2data.split("\n")[5].split(": ")[1]))/2);
        // avgperformancestatistics.push((Number(match1data.split("\n")[7].split(": ")[1]) + Number(match2data.split("\n")[7].split(": ")[1]))/2);
        // console.log(avgperformancestatistics);
        // setavgstatistics("Autonomous Amp: " + avgperformancestatistics[0] + "\nAutonoumous Speaker: " + avgperformancestatistics[1] + "\nTeleop Amp: " + avgperformancestatistics[2] + "\nTeleop Speaker: " + avgperformancestatistics[3] + "\nTrap: " + avgperformancestatistics[4]);
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
        <p class = "koholo">Please enter a team number below for pit data and all match data. {q.split("\n").map((line, index) => (
            <div style={{color: "red"}}>
                {line}
                <br/>
            </div>
        ))}</p>
        <form onSubmit={handleSubmit}>
        <h2 class = "lopop">Team Search<input type="text" id="searchbar" placeholder="Search" name="query"/></h2>
        {/* <h2 class = "lopop">Match Search: <input type="text" id="searchbar" placeholder="Search" name="match"/></h2> */}
        <button type = "submit" class = "butoj">Search</button>
        </form>
        <div className="button-container">
            <button className="statsbutton">Match Data</button>
            <p class = "lopop"> {match1.split("\n").map((line, index) => (
                <div key={index} className="c">
                    {line}
                    <br />
                </div>
                ))}
            </p>
            <button className="statsbutton">Avg Match Stats</button>
            <p class = "lopop"> {avgstatistcs.split("\n").map((line, index) => (
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