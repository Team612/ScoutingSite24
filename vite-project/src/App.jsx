import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import LoginPage from "./Login.jsx"
import HomePage from "./Home.jsx"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </Router>
        
  );
  
};

export default App