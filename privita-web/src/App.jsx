import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b1120] text-white selection:bg-cyan-500/30 font-sans flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Showcase />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
