import React from 'react';

const FinalCTA = () => {
    return (
        <section className="bg-[#0f172a] py-32 relative overflow-hidden">
            {/* Immersive Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                <h2 className="text-4xl md:text-7xl font-['Bebas_Neue'] text-white mb-8 tracking-tight leading-none max-w-4xl drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                    Secure your AI before it becomes a liability
                </h2>

                <p className="text-xl md:text-3xl text-gray-400 font-light mb-12 max-w-3xl leading-relaxed">
                    If you’re deploying LLMs in production, you need enforcement — not just observability.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button
                        onClick={() => {
                            // Logic for Book Demo
                        }}
                        className="px-10 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-['Bebas_Neue'] text-2xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.3)]"
                    >
                        Book Demo
                    </button>

                    <button
                        onClick={() => {
                            // Logic for Get Access
                        }}
                        className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-['Bebas_Neue'] text-2xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(147,51,234,0.3)]"
                    >
                        Get Access
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
