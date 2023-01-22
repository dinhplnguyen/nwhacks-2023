import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
// import Login from "./components/login/Login";

<<<<<<< Updated upstream
import { Landing, About, Login, Register, Login2 } from './components/Components';
=======
import { Landing, About, Login, Register, Error } from './components/Components';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
<<<<<<< Updated upstream
          <Route exact path="/login" element={<Login2 />} />
          <Route exact path="/register" element={<Register />} />
=======
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route path="*" element={<Error />} />
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
