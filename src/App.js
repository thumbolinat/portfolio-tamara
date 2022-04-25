import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/index";
import Home from "./components/About/index";
import Footer from "./components/Footer/index";
import Contact from "./components/Contact/index"
import Resume from "./components/Resume/index"
import "./style.css"
import "./App.css";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        
        <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/contat" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    
    </Router>
  );
}

export default App;
