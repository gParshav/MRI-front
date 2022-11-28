import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Upload from './Upload';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
<Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/contact" element={<App />} /> 
      {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
  </Router>,
// </React.StrictMode>,
document.getElementById('root')
);
