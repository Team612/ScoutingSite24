import "./App.css";
 // Filename - App.js
 
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { HomePage } from './App';
import { LoginPage } from './Login';


function App() {
    return (
        <div>
            <BrowserRouter>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Routes>
                    <Route exact path="/" element =  {<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;