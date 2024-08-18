import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import LoginPage from "./Login.jsx"
import HomePage from "./Home.jsx"
import MainScreen from "./MainScreen.jsx"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mainscreen" element={<MainScreen />} />
      <Route path="/standscouting" element={<StandScouting />} />
    </Routes>
    </Router>
        
  );
  
};

export default App