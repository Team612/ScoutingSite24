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
    async function SignUpDataAdd(a,b) {
        // // Assign pass and teamID here to the database
        await setDoc(doc(db, a, "ScoutData"), {
          ALeave: ALeave,
          AAmp: AAmp,
          ASpeaker: ASpeaker,
          TAmp: TAmp,
          TSpeaker: TSpeaker,
          climb: climb,
          trap:trap
        });
    }

    function SaveSS() {
        console.log(ALeave);
        console.log(AAmp);
        console.log(ASpeaker);
        console.log(TAmp);
        console.log(TSpeaker);
        console.log(climb);
        console.log(trap);
        SignUpDataAdd("612", "f");
    }

    

  const [count, setCount] = useState(0)
  var [trap, setTrap] = useState(0)
  function AddOneTrap(){
    setTrap(trap+1)
  }
  function MinusOneTrap(){
    setTrap(trap-1)
  }

  var [climb, setClimb] = useState(false)
  function YesClimb(){
    setClimb(true)
  }
  function NoClimb(){
    setClimb(false)
  }

  var [TSpeaker, setTSpeaker] = useState(0)
  function AddOneTSpeaker(){
    setTSpeaker(TSpeaker + 1)
  }
  function MinusOneTSpeaker(){
    setTSpeaker(TSpeaker-1)
  }

  var [TAmp, setTAmp] = useState(0)
  function AddOneTAmp(){
    setTAmp(TAmp+1)
  }
  function MinusOneTAmp(){
    setTAmp(TAmp-1)
  }

  var [ASpeaker, setASpeaker] = useState(0)
  function AddOneSpeaker(){
    setASpeaker(ASpeaker+1)
  }
  function MinusOneSpeaker(){
    setASpeaker(ASpeaker-1)
  }

  var [AAmp, setAAmp] = useState(0)
  function AddOneAAmp(){
    setAAmp(AAmp+1)
  }
  function MinusOneAAmp(){
    setAAmp(AAmp-1)
  }

  var [ALeave, setALeave] = useState(false)
  function YesLeave(){
    setALeave(true)
  }
  function NoLeave(){
    setALeave(false)
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
    <div id = "standscoutingpage">
    {/* <form> */}
        <h1 id = "scoutingHead">Stand Scouting</h1>
        <div>
            <button id="button1">Match Number</button>
            <input type = "text" class = "button2"></input>
        </div>
        <div>
          <button id="button1">Team Number</button>
            <input type = "text" class = "button2"></input>
        </div>
        <div>
        <button id="button1">(Auto) Leave Zone</button>
            <button id="button-24" onClick={() =>NoLeave()}>No</button>
            <button id="button-25" onClick={() =>YesLeave()}>Yes</button>
        </div>
        <div>
        <button id="button1">(Auto) Amp</button>
        <button id="button-24" onClick={() =>MinusOneAAmp()}>-1</button>
           <p id = "speakerId">{AAmp}</p>
            <button id="button-25" onClick={() =>AddOneAAmp()}>+1</button>
        </div>
        <div>
           <button id="button1">(Auto) Speaker</button>
           <button id="button-24" onClick={() =>MinusOneSpeaker()}>-1</button>
           <p id = "speakerId">{ASpeaker}</p>
            <button id="button-25" onClick={() =>AddOneSpeaker()}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Engame) Amp</button>
           <button id="button-24" onClick={() =>MinusOneTAmp()}>-1</button>
           <p id = "speakerId">{TAmp}</p>
            <button id="button-25" onClick={() =>AddOneTAmp()}>+1</button>
        </div>
        <div>
           <button id="button1">(Teleop/Endgame) Speaker</button>
           <button id="button-24" onClick={() =>MinusOneTSpeaker()}>-1</button>
           <p id = "speakerId">{TSpeaker}</p>
            <button id="button-25" onClick={() =>AddOneTSpeaker()}>+1</button>
        </div>
        <div>
           <button id="button1">Climb</button>
           <button id="button-24" onClick={() =>NoClimb()}>No</button>
            <button id="button-25" onClick={() =>YesClimb()}>Yes</button>
        </div>
        <div>
           <button id="button1">Trap</button>
           <button id="button-24" onClick={() =>MinusOneTrap()}>-1</button>
           <p id = "speakerId">{trap}</p>
            <button id="button-25" onClick={() =>AddOneTrap()}>+1</button>
        </div>

        <div>
            <button type = "submit" class = "button" onClick={() =>SaveSS()}>SAVE!</button>
        </div>
    {/* </form>     */}
            {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}
        </div>

    </>
  )
  
}

export default App