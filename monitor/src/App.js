import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Landing, About, Login, Register } from './components/Components';

function App() {
  return (
    <div className="App">
      <Landing />
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Landing />} /> */}
          {/* <Route exact path="/Login" element={<Login />} /> */}
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
