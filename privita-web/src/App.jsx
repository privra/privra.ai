import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white selection:bg-cyan-500/30 font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
