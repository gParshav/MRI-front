import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Upload from './Upload';
import Upload2 from './Upload2';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Temp from './Temp';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Temp/>
  </React.StrictMode>
);


