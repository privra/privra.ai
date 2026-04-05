import React from 'react';

const TrustStrip = () => {
    return (
        <section className="bg-[#0a0f1d] border-y border-white/5 py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl md:text-3xl font-['Bebas_Neue'] tracking-wider text-white mb-2 drop-shadow-sm">
                        Purpose-built for teams deploying LLMs in production.
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light">
                        Works across copilots, RAG systems, and AI agents.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
