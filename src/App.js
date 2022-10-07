import React from 'react'
import Main from './pages/MainPage.js'
import TheGreatWhites from './pages/TheGreatWhites.jsx';
import TheTurnKeySalon from './pages/TheTurnKeySalon';
import MooPoint from './pages/MooPoint';
import PotPourri from './pages/PotPourri';
import Hammered from './pages/Hammered';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/the-great-whites" element={<TheGreatWhites/>} />
        <Route exact path="/the-turnkey-salon" element={<TheTurnKeySalon/>} />
        <Route exact path="/moopoint" element={<MooPoint/>} />
        <Route exact path="/potpourri" element={<PotPourri/>} />
        <Route exact path="/hammered" element={<Hammered/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;