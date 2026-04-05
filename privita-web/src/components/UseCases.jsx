import React from 'react';

const UseCases = () => {
    const useCases = [
        {
            title: "AI Copilots",
            description: "Prevent unsafe or off-policy responses."
        },
        {
            title: "RAG Systems",
            description: "Stop malicious documents from manipulating outputs."
        },
        {
            title: "AI Agents",
            description: "Control tool use and prevent unsafe actions."
        },
        {
            title: "Enterprise AI",
            description: "Protect internal knowledge and sensitive workflows."
        }
    ];

    return (
        <section className="bg-[#0f172a] py-32 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-6xl font-['Bebas_Neue'] text-white mb-20 tracking-tight text-center">
                    Built for modern AI systems
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all duration-300 group hover:bg-white/[0.04]">
                            <h3 className="text-2xl font-bold text-white mb-4 font-['Bebas_Neue'] tracking-wide group-hover:text-cyan-400 transition-colors">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
