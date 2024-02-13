import React from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom/client';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';

function App() {
  return (
    <div>
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/red" element={<Red />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
