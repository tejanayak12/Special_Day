import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ValentineHome from './components/ValentineHome';
import SuccessPage from './components/SuccessPage';
import './index.css';

import CustomCursor from './components/CustomCursor';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <>
      <CustomCursor />
      <MusicPlayer />
      <Router>
        <Routes>
          <Route path="/" element={<ValentineHome />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
