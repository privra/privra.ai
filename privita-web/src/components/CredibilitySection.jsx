import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

const CredibilitySection = () => {
    const pillars = [
        { icon: Target, text: "Production-focused" },
        { icon: ShieldCheck, text: "Security-first" },
        { icon: Zap, text: "Real-time enforcement" }
    ];

    return (
        <section className="bg-[#0f172a] py-24 relative overflow-hidden border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Main Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-['Bebas_Neue'] text-white mb-6 tracking-tight">
                            Designed for production AI systems
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                            Used by teams building copilots, retrieval systems, and agent workflows in production environments.
                        </p>
                    </div>

                    {/* Specific Pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="flex flex-col items-center sm:items-start p-6 rounded-xl bg-white/[0.02] border border-white/5">
                                <pillar.icon className="w-8 h-8 text-cyan-400 mb-4" />
                                <span className="text-white font-medium text-lg leading-tight text-center sm:text-left">
                                    {pillar.text}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CredibilitySection;
