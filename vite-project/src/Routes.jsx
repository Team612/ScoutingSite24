// import "./App.css";
 // Filename - App.js
 
// importing components from react-router-dom package
import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import { App } from './App';
import { LoginPage } from './Login';


function Routes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  }
 
export default Routes;