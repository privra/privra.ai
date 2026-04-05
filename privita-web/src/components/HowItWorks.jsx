import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Intercept",
            description: "Every AI request passes through Privra AI before reaching the model."
        },
        {
            number: "02",
            title: "Analyze",
            description: "Detect prompt injection, data leakage, and policy violations across inputs and outputs."
        },
        {
            number: "03",
            title: "Enforce",
            description: "Block, redact, modify, or log content in real time."
        }
    ];

    return (
        <section className="bg-[#0f172a] py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-6xl font-['Bebas_Neue'] text-white mb-20 tracking-tight text-center">
                    How it works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-10 rounded-2xl bg-[#1e293b]/20 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 group">
                            {/* Number Icon */}
                            <div className="text-5xl font-['Bebas_Neue'] text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors mb-6">
                                {step.number}
                            </div>

                            {/* Step Title */}
                            <h3 className="text-2xl font-bold text-white mb-4 font-['Bebas_Neue'] tracking-wide">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector Line for Desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-cyan-400/20 to-transparent z-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
