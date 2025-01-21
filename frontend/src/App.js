import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CursorTrail from './components/Cursor'; // Adjust the path if needed

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen overflow-hidden">
        <CursorTrail /> {/* Add the cursor trail effect here */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
