import React from 'react';

const IntegrateSection = () => {
    const codeSnippet = `secure_response = privra.enforce(
    prompt=user_input,
    policy="no_sensitive_data"
)`;

    return (
        <section className="bg-[#0f172a] py-32 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Layer */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-['Bebas_Neue'] text-white mb-4 tracking-tight leading-none">
                            Integrate in minutes
                        </h2>
                        <p className="text-xl md:text-2xl text-cyan-400 font-light mb-6">
                            Deploy as a lightweight middleware layer in front of any LLM stack.
                        </p>
                        <p className="text-lg text-gray-400 font-light leading-relaxed mb-6 max-w-xl">
                            Deploy Privra AI as a lightweight enforcement layer in front of any model stack. Works with hosted LLMs, open-source models, retrieval systems, and agent frameworks.
                        </p>

                        <div className="flex items-center gap-2 mb-10 text-cyan-400 font-mono text-sm opacity-80 tracking-tight">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>Detects prompt injection patterns in real time</span>
                        </div>

                        <div className="flex items-center gap-6 text-cyan-400 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                <span>Python SDK</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                <span>REST API</span>
                            </div>
                        </div>
                    </div>

                    {/* Code Snippet Layer */}
                    <div className="relative group">
                        {/* Decorative Glow Behind Code */}
                        <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/15 transition-all duration-500" />

                        <div className="relative bg-[#0d1117] rounded-2xl border border-white/10 p-8 shadow-2xl overflow-hidden">
                            {/* Window Controls */}
                            <div className="flex gap-1.5 mb-6">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>

                            {/* Code Content */}
                            <pre className="text-sm md:text-base font-mono leading-relaxed overflow-x-auto text-gray-300">
                                <code className="block">
                                    <span className="text-cyan-400">secure_response</span> = privra.<span className="text-yellow-200">enforce</span>(
                                    <br />
                                    {"    "}<span className="text-purple-400">prompt</span>=user_input,
                                    <br />
                                    {"    "}<span className="text-purple-400">policy</span>=<span className="text-green-400">"no_sensitive_data"</span>
                                    <br />
                                    )
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrateSection;
