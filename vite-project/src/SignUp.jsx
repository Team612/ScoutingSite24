import React, { useState } from "react";
import "./App.css";
import NavLink from "./NavElements.jsx";
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore"; 
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
var signUpDatas = ["sample", "sample", "sample"];



async function SignUpDataAdd() {
  // Assign pass and teamID here to the database
  // await setDoc(doc(db, teamID, "Information"), {
    // console.log(val1);
  //   Team_Number: teamID,
  //   Password: pass
  // });
}

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('/some-api', { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
}

const SignUpPage = () => {
  return (
    <>
      {/* Montseratt Font: Headings */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* Bebas Neue Font: Subheading */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* Outfit Font: Paragraph Website Text */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      ></link>
      {/* Josefin Sans: Button Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      ></link>

      <div id="header">
        <a href="/">
          <img id="image612" src="/src/images/logo.jpeg" alt="612 Logo" />
        </a>
        <a>
            <NavLink to="/mainscreen" activeStyle id="imageHome">
                <img id="imagehome" src="/src/images/home.jpg"/>
            </NavLink>
        </a>
      </div>

      <div id="signuppage">
        <form onSubmit={handleSubmit}>
            <h1 id="scoutingHead">Sign Up</h1>
            <div class="signup">
              <h2 id="signUph2">Create Team ID:</h2>
              <input name = "myInput" type="text" class="button2" placeholder="Team ID #" />
            </div>
        
            
            <div class="signup">
              <h2 id="signUph2">Create Password:</h2>
              <input name = "myInput" type="password" class="button2" placeholder="Password" />
            </div>
            <div class="signup">
              <h2 id="signUph2">Retype Password:</h2>
              <input name = "myInput" type="password" class="button2" placeholder="Password" />
            </div>
            <p>
              DO NOT MAKE AN ACCOUNT FOR A TEAM YOU ARE NOT A PART OF, IF YOUR
              TEAM’s ACCOUNT IS ALREADY TAKEN, Contact us at chantilly.612@gmail.com to get
              your account back. Until then, you may use any combination of letters
              in your team number in place of your team number.
            </p>
            <button id="submitButton" class = "FirebaseAdd" onClick={() =>SignUpDataAdd()}>Sign Up</button>
        </form>
        <div id="forgotPassword">Forgot Password?</div>
      </div>
      {/* <div id = "footer">Contact us at Chantilly.612@gmail.com for help!</div> */}
    </>
  );
};

export default SignUpPage;
