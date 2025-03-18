import { useState } from 'react'
import NavLink from "./NavElements.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore"; 
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Cookies from 'js-cookie';
import { getDoc } from "firebase/firestore";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


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


function App() {
    async function SignUpDataAdd(a,b,c,d,e) {
        // // Assign pass and teamID here to the database
        await setDoc(doc(db, a, "ScoutData_" + b + "_" + c), {
          "Match": c,
          "Team": b,
          "Scouter Name": e,
          position: position,
          ALeave: ALeave,
          L1AC: L1AC,
          L2AC: L2AC,
          L3AC: L3AC,
          L4AC: L4AC,
          AAlgae: AAlgae,
          L1C: L1C,
          L2C: L2C,
          L3C: L3C,
          L4C: L4C,
          APS: APS,
          ASN: ASN,
          BP: BP,
          CP: CP,
          AutoRP: AutoRP,
          DClimb: DClimb,
          SClimb: SClimb,
          PClimb: PClimb,
          skill: skill,
          other: d,
          coopertitionPoint: coopertitionPoint
        });
    }

    function SaveSS(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // fetch('/some-api', { method: form.method, body: formData });
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        SignUpDataAdd(Cookies.get('Log'), formJson["team number"], formJson["match"], formJson["otherBox"], formJson["scouter name"]);
        // alert("Saved! Go back to main page.");
        setSaveMessage("✅ Data Saved Successfully!");
    }

  const [leaveChoice, setLeaveChoice] = useState("");

  const [saveMessage, setSaveMessage] = useState("");

  var [coopertitionPoint, setCoopPoint] = useState("");

  var [skill, setSkill] = useState(0)
  const [position, setPosition] = useState("");
  var [ALeave, setALeave] = useState(false)
  const [L1AC, setL1AC] = useState(0);
  const [L2AC, setL2AC] = useState(0);
  const [L3AC, setL3AC] = useState(0);
  const [L4AC, setL4AC] = useState(0);

  const [AAlgae, setAAlgae] = useState(0);

  const [L1C, setL1C] = useState(0);
  const [L2C, setL2C] = useState(0);
  const [L3C, setL3C] = useState(0);
  const [L4C, setL4C] = useState(0);

  const [APS, setAPS] = useState(0);
  const [ASN, setASN] = useState(0);


  const [BP, setBP] = useState(false);
  const [CP, setCP] = useState(false);
  const [AutoRP, setAutoRP] = useState("");
  const [DClimb, setDClimb] = useState("");
  const [SClimb, setSClimb] = useState("");
  const [PClimb, setPClimb] = useState("");
  
  const matchRef = useRef();
  const teamRef = useRef();
  const navigate = useNavigate();


  function AddOneSkill(){
    setSkill(skill+1)
  }
  function MinusOneSkill(){
    setSkill(skill-1)
  }

  function YesAutoRP(){
    //alert("Selected Yes");
    setAutoRP(true)
  }
  function NoAutoRP(){
    //alert("Selected No");
    setAutoRP(false)
  }

  function YesCP(){
    //alert("Selected Yes");
    setCP(true)
  }
  function NoCP(){
    //alert("Selected No");
    setCP(false)
  }
  function YesBP(){
    //alert("Selected Yes");
    setBP(true)
  }
  function NoBP(){
    //alert("Selected No");
    setBP(false)
  }


  function YesLeave(){
    //alert("Selected Yes");
    setALeave(true)
  }
  function NoLeave(){
    //alert("Selected No");
    setALeave(false)
  }

  function YesPClimb(){
    //alert("Selected Yes");
    setPClimb(true)
  }
  function NoPClimb(){
    //alert("Selected No");
    setPClimb(false)
  }
  
  function YesDClimb(){
    //alert("Selected Yes");
    setDClimb(true)
  }
  function NoDClimb(){
    //alert("Selected No");
    setDClimb(false)
  }

  function YesSClimb(){
    //alert("Selected Yes");
    setSClimb(true)
  }
  function NoSClimb(){
    //alert("Selected No");
    setSClimb(false)
  }

  function MinusOneL1AC(){
    //alert("Selected Yes");
    setL1AC(L1AC-1);
  }
  function AddOneL1AC(){
    //alert("Selected No");
    setL1AC(L1AC+1);
  }

  function MinusOneAlgaeA(){
    //alert("Selected Yes");
    setAAlgae(AAlgae-1);
  }
  function AddOneAlgaeA(){
    //alert("Selected No");
    setAAlgae(AAlgae+1);
  }

  function MinusOneL2AC(){
    //alert("Selected Yes");
    setL2AC(L2AC-1);
  }
  function AddOneL2AC(){
    //alert("Selected No");
    setL2AC(L2AC+1);
  }

  function MinusOneL3AC(){
    //alert("Selected Yes");
    setL3AC(L3AC-1);
  }
  function AddOneL3AC(){
    //alert("Selected No");
    setL3AC(L3AC+1);
  }

  function MinusOneL4AC(){
    //alert("Selected Yes");
    setL4AC(L4AC-1);
  }
  function AddOneL4AC(){
    //alert("Selected No");
    setL4AC(L4AC+1);
  }




  function MinusOneL1C(){
    //alert("Selected Yes");
    setL1C(L1C-1);
  }
  function AddOneL1C(){
    //alert("Selected No");
    setL1C(L1C+1);
  }

  function MinusOneL2C(){
    //alert("Selected Yes");
    setL2C(L2C-1);
  }
  function AddOneL2C(){
    //alert("Selected No");
    setL2C(L2C+1);
  }

  function MinusOneL3C(){
    //alert("Selected Yes");
    setL3C(L3C-1);
  }
  function AddOneL3C(){
    //alert("Selected No");
    setL3C(L3C+1);
  }

  function MinusOneL4C(){
    //alert("Selected Yes");
    setL4C(L4C-1);
  }
  function AddOneL4C(){
    //alert("Selected No");
    setL4C(L4C+1);
  }

  function MinusOneAPS(){
    //alert("Selected Yes");
    setAPS(APS-1);
  }
  function AddOneAPS(){
    //alert("Selected No");
    setAPS(APS+1);
  }

  function MinusOneASN(){
    //alert("Selected Yes");
    setASN(ASN-1);
  }
  function AddOneASN(){
    //alert("Selected No");
    setASN(ASN+1);
  }

  function SaveAlert() {
      setSaveMessage("✅ Data Saved Successfully!");
  }


  function SavePosition(pos){
    //alert("chose " + pos);
    setPosition(pos);
  }

  function SaveCoopPoint(bool) {
    setCoopPoint(bool);
  }

  async function LoadScoutingData(collectionName, team, match) {
    const docRef = doc(db, collectionName, "ScoutData_" + team + "_" + match);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      const data = docSnap.data();
      setPosition(data.position);
      setALeave(data.ALeave);
      setL1AC(data.L1AC);
      setL2AC(data.L2AC);
      setL3AC(data.L3AC);
      setL4AC(data.L4AC);
      setAAlgae(data.AAlgae);
      setL1C(data.L1C);
      setL2C(data.L2C);
      setL3C(data.L3C);
      setL4C(data.L4C);
      setAPS(data.APS);
      setASN(data.ASN);
      setBP(data.BP);
      setCP(data.CP);
      setAutoRP(data.AutoRP);
      setDClimb(data.DClimb);
      setSClimb(data.SClimb);
      setPClimb(data.PClimb);
      setSkill(data.skill);
      setCoopPoint(data.coopertitionPoint);
      // idk if I forgot anything
    }
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
    <div id = "standscoutingpage">
    {/* <form> */}
        <h1 id = "scoutingHead">Stand Scouting</h1>
        <form onSubmit={SaveSS}>
        <div>
        <button id="button1">Match Number</button>
          <input type="text" className="button2" name="match" ref={matchRef} />
        </div>
        <div>
          <button id="button1">Team Number</button>
            <input type="text" className="button2" name="team number" ref={teamRef} />
        </div>
        <div>
          <button id="button1">Scouter Name</button>
            <input type = "text" class = "button2" name="scouter name"></input>
        </div>

        <div>
          <button
            id="posButton"
            onClick={(event) => {
              event.preventDefault();
              const match = matchRef.current.value;
              const team = teamRef.current.value;
              if (match && team) {
                LoadScoutingData(Cookies.get("Log"), team, match);
              } else {
                alert("Please enter both team number and match number to load data");
              }
            }}
          >
            Load Previous
          </button>

        </div>

        <div>
          <button id="0">
            Team Position: {position}
            <br />
            
          </button>
          <div style={{ marginTop: '8px' }}>
            <button id="posButton" onClick={(event) => { event.preventDefault(); SavePosition("B1"); }}>
              B1
            </button>
            <button id="posButton" onClick={(event) => { event.preventDefault(); SavePosition("B2"); }}>
              B2
            </button>
            <button id="posButton" onClick={(event) => { event.preventDefault(); SavePosition("B3"); }}>
              B3
            </button>
          </div>
          <div style={{ marginTop: '4px' }}>
            <button id="posButton" onClick={(event) => { event.preventDefault(); SavePosition("R1"); }}>
              R1
            </button>
            <button id="posButton" onClick={(event) => { event.preventDefault(); SavePosition("R2"); }}>
              R2
            </button>
            <button id="posButton" onClick={(event) => { event.preventDefault(); SavePosition("R3"); }}>
              R3
            </button>
          </div>
        </div>
        <div>
        <button id="button1">(Auto) Leave Zone</button>
          <button id="button-24" onClick={(event) => { event.preventDefault(); setLeaveChoice("No"); NoLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: leaveChoice === "Yes" ? "green" : "red" }}>
              {leaveChoice}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setLeaveChoice("Yes"); YesLeave();}}>Yes</button>
        </div>
        <div>
        <button id="button1">(Auto) Coral L1</button>
        <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL1AC();}}>-1</button>
           <p id = "speakerId">{L1AC}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL1AC();}}>+1</button>
        </div>
        <div>
        <button id="button1">(Auto) Coral L2</button>
        <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL2AC();}}>-1</button>
           <p id = "speakerId">{L2AC}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL2AC();}}>+1</button>
        </div>
        <div>
        <button id="button1">(Auto) Coral L3</button>
        <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL3AC();}}>-1</button>
           <p id = "speakerId">{L3AC}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL3AC();}}>+1</button>
        </div>
        <div>
        <button id="button1">(Auto) Coral L4</button>
        <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL4AC();}}>-1</button>
           <p id = "speakerId">{L4AC}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL4AC();}}>+1</button>
        </div>
        <div>
           <button id="button1">(Auto) Algae</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault();; MinusOneAlgaeA();}}>-1</button>
           <p id = "speakerId">{AAlgae}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault();; AddOneAlgaeA();}}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Engame) Coral L1</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL1C()}}>-1</button>
           <p id = "speakerId">{L1C}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL1C()}}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Engame) Coral L2</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL2C()}}>-1</button>
           <p id = "speakerId">{L2C}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL2C()}}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Engame) Coral L3</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL3C()}}>-1</button>
           <p id = "speakerId">{L3C}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL3C()}}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Engame) Coral L4</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneL4C()}}>-1</button>
           <p id = "speakerId">{L4C}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneL4C()}}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Endgame) Algae Scored (Processor)</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneAPS()}}>-1</button>
           <p id = "speakerId">{APS}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault();AddOneAPS()}}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Endgame) Algae Scored (Net)</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneASN()}}>-1</button>
           <p id = "speakerId">{ASN}</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault();AddOneASN()}}>+1</button>
        </div>
        <div>
           <button id="button1">Deep Climb</button>
           <button id="button-24" onClick={(event) => { event.preventDefault(); setDClimb("No"); YesLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: DClimb === "Yes" ? "green" : "red" }}>
              {DClimb}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setDClimb("Yes"); YesLeave();}}>Yes</button>
        </div>
        <div>
           <button id="button1">Shallow Climb</button>
           <button id="button-24" onClick={(event) => { event.preventDefault(); setSClimb("No"); YesLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: SClimb === "Yes" ? "green" : "red" }}>
              {SClimb}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setSClimb("Yes"); YesLeave();}}>Yes</button>
        </div>
        <div>
           <button id="button1">Park (Endgame)</button>
           <button id="button-24" onClick={(event) => { event.preventDefault(); setPClimb("No"); YesLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: PClimb === "Yes" ? "green" : "red" }}>
              {PClimb}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setPClimb("Yes"); YesLeave();}}>Yes</button>
        </div>

        <div>
           <button id="button1">Barge RP</button>
           <button id="button-24" onClick={(event) => { event.preventDefault(); setBP("No"); YesLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: BP === "Yes" ? "green" : "red" }}>
              {BP}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setBP("Yes"); YesLeave();}}>Yes</button>
        </div>

        <div>
           <button id="button1">Coral RP</button>
           <button id="button-24" onClick={(event) => { event.preventDefault(); setCP("No"); YesLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: CP === "Yes" ? "green" : "red" }}>
              {CP}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setCP("Yes"); YesLeave();}}>Yes</button>
        </div>

        <div>
           <button id="button1">Auto RP</button>
           <button id="button-24" onClick={(event) => { event.preventDefault(); setAutoRP("No"); YesLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: AutoRP === "Yes" ? "green" : "red" }}>
              {AutoRP}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setAutoRP("Yes"); YesLeave();}}>Yes</button>
        </div>

        <div>
           <button id="button1">Cooperition Point</button>
           <button id="button-24" onClick={(event) => { event.preventDefault(); setCoopPoint("No"); YesLeave();}}>No</button>
            <span style={{ margin: "0 10px", fontWeight: "bold", color: coopertitionPoint === "Yes" ? "green" : "red" }}>
              {coopertitionPoint}
            </span>
            <button id="button-25" onClick={(event) => { event.preventDefault(); setCoopPoint("Yes"); YesLeave();}}>Yes</button>
        </div>

        <div>
           <button id="button1">Driving Skill (X/10)</button>
           <button id="button-24" onClick={(event) =>{event.preventDefault(); MinusOneSkill()}}>-1</button>
           <p id = "speakerId">{skill}/10</p>
            <button id="button-25" onClick={(event) =>{event.preventDefault(); AddOneSkill()}}>+1</button>
        </div>
        <div>
        <button id="button1">Other (Robot Died, etc.)</button>
        <input type = "text" class = "button2" name="otherBox"></input>
        </div>
        <div>
          {saveMessage && <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>{saveMessage}</p>}

            <button type = "submit" class = "button" onClick={() => {SaveSS(); SaveAlert();}}>SAVE!</button>
        </div>
        <NavLink to="/mainscreen" activeStyle id="backHome">
                <img id="imagehome" src="/images/home.jpg"/>
            </NavLink>

        </form>
    {/* </form>     */}
            {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}
        </div>

    </>
  )
  
}

export default App