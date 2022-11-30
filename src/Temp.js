import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Upload from './Upload';
import Upload2 from './Upload2';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';

function Temp() {
  return (
    <div>
        <Router>
       <Navbar/>
           <Routes>   
             <Route exact path="/" element={<App />} />
             <Route path="/upload" element={<Upload2 />} />
           </Routes>
         </Router>
         </div>
  )
}

export default Temp