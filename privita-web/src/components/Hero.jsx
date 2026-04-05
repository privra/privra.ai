import React, { useState } from 'react';
import heroGraphic from '../assets/hero-graphic.png';
import DemoModal from './DemoModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative pt-48 pb-16 overflow-hidden bg-[#0b1120]">
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <img
                    src={heroGraphic}
                    alt=""
                    className="w-[1200px] h-auto object-contain opacity-20 select-none transform scale-110"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-32">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-['Bebas_Neue'] mb-12 tracking-tight leading-[0.9] uppercase">
                    <span className="text-white opacity-90 block mb-2">PREVENT AI RISK</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-cyan-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        BEFORE IMPACT
                    </span>
                </h1>

                <div className="flex flex-col items-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-12 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-['Bebas_Neue'] text-3xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.3)] min-w-[280px]"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Modal */}
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Hero;
