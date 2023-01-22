import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
// import Login from "./components/login/Login";

import { Landing, About, Login, Register, Login2, Thirsty } from './components/Components';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login2 />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/thirsty" element={<Thirsty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
