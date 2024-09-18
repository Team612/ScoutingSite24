import { useState } from 'react';
//import LoginPage from './Login'
// import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.css';
import { initializeApp } from 'firebase/app';
import NavLink from "./NavElements.jsx";
import { getFirestore } from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
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
var cont;
var inputValue;
async function LogInDataGet(teamID, password) {
  // console.log("Team ID:", teamID, "Password", password);
  const docRef = doc(db, teamID, "Information");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // if (doc);
  } else {
    console.log("No such document!");
  }
  console.log(docSnap.data()["Password"])
  if(docSnap.data()["Password"] == password){
    cont = true;
    Cookies.set('Log', teamID);
  }
  else{
    cont = false;
    Cookies.set('Log', "none");
  }

}
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  fetch('/some-api', { method: form.method, body: formData });
  const formJson = Object.fromEntries(formData.entries());
  LogInDataGet(formJson["teamID"], formJson["password"]);
}
const LoginPage = () => {
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
            {/* <NavLink to="/mainscreen" activeStyle id="imageHome"> */}
                {/* <img id="imagehome" src="/src/images/home.jpg"/> */}
            {/* </NavLink> */}
        </a>
    </div>

    <div id = "loginpage">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <div id="login">
        <h2 id="signUph2">Team ID:    </h2>
          <input name="teamID" value = {inputValue} type="text" class="button2" placeholder="Team ID #" />
      </div>
      <div id="login">
      <h2 id="signUph2">Password:   </h2>
          <input name="password" value = {inputValue} type="text" class="button2" placeholder="Password" />
        </div>
        <button id="submitButton">Submit</button>
        <p id="p"></p>
        <div id="forgotPassword">Forgot Password?</div>
    </form>
    </div>
    </>
  )
}

export default LoginPage;


