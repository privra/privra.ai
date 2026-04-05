import React from 'react';

const WhyThisMatters = () => {
    return (
        <section className="bg-[#0f172a] py-32 relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-['Bebas_Neue'] text-white mb-10 tracking-tight leading-none max-w-4xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    AI applications are shipping without enforcement
                </h2>

                <div className="max-w-3xl space-y-8">
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                        Prompt injection attacks are already happening. Sensitive data can leak through LLM responses. Most teams rely on fragile, ad hoc safeguards that break in production.
                    </p>

                    <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-50" />

                    <p className="text-2xl md:text-4xl font-['Bebas_Neue'] text-cyan-400 tracking-wider brightness-110 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        AI needs an enforcement layer — not just monitoring.
                    </p>
                    <p className="text-xl md:text-2xl text-gray-500 font-light mt-4 italic opacity-80 uppercase tracking-widest">
                        Every AI application will need an enforcement layer.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyThisMatters;
