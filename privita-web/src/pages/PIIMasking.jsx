import React from 'react';
import { Shield, ArrowRight, EyeOff, CheckCircle2 } from 'lucide-react';

const PIIMasking = () => {
    return (
        <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 font-sans relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Text */}
                <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-500/30 text-cyan-400 mb-6 relative">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                        <span className="text-xs font-bold tracking-widest uppercase">Privacy Protection</span>
                    </div>
                    <h1 className="text-5xl font-['Bebas_Neue'] tracking-widest text-white mb-6 drop-shadow-lg">
                        Active PII Masking
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                        Automatically redact sensitive personal data—like SSNs, emails, and credit card numbers—before your prompts ever reach external LLM providers. Guarantee data privacy and enforce strict compliance seamlessly.
                    </p>
                </div>

                {/* Demonstration Section */}
                <div className="bg-[#0b1120] rounded-3xl p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Original Prompt Container */}
                        <div className="flex-1 w-full bg-white/5 p-6 rounded-2xl border border-white/5 relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-rose-950/60 text-rose-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-rose-500/30">
                                Unprotected Entry
                            </div>
                            <div className="mt-2 text-gray-300 font-mono text-sm leading-relaxed">
                                <span className="text-gray-500">&gt; System: Please analyze this user profile.</span>
                                <br/><br/>
                                Name: John Doe<br/>
                                Email: <span className="bg-rose-500/20 text-rose-400 px-1 rounded font-semibold">john.doe@example.com</span><br/>
                                SSN: <span className="bg-rose-500/20 text-rose-400 px-1 rounded font-semibold">***-**-6789</span><br/>
                                Notes: User has requested password reset for account.
                            </div>
                        </div>

                        {/* Middle Arrow / Engine */}
                        <div className="flex flex-col items-center justify-center shrink-0">
                            <div className="w-16 h-16 bg-[#030712] border border-white/10 rounded-full flex items-center justify-center shadow-lg shadow-cyan-900/30 mb-2 relative">
                                <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-ping opacity-20"></div>
                                <Shield className="h-8 w-8 text-cyan-400" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Privra Proxy</span>
                        </div>

                        {/* Masked Prompt Container */}
                        <div className="flex-1 w-full bg-cyan-950/20 p-6 rounded-2xl border border-cyan-500/20 relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-cyan-900/50 text-cyan-300 text-[10px] font-bold uppercase tracking-wider rounded-md border border-cyan-500/30 flex items-center gap-1.5">
                                <EyeOff className="w-3 h-3" />
                                Masked Output
                            </div>
                            <div className="mt-2 text-gray-300 font-mono text-sm leading-relaxed">
                                <span className="text-gray-500">&gt; System: Please analyze this user profile.</span>
                                <br/><br/>
                                Name: <span className="bg-cyan-500/20 text-cyan-400 px-1 rounded font-bold">[REDACTED_PERSON]</span><br/>
                                Email: <span className="bg-cyan-500/20 text-cyan-400 px-1 rounded font-bold">[REDACTED_EMAIL]</span><br/>
                                SSN: <span className="bg-cyan-500/20 text-cyan-400 px-1 rounded font-bold">[REDACTED_SSN]</span><br/>
                                Notes: User has requested password flex for account.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
                    <div className="p-6 bg-[#0b1120] rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <h3 className="text-lg font-bold text-white">50+ PII Entities</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Instantly recognize and redact names, financial data, health records, secrets, and local identifiers automatically.</p>
                    </div>
                    <div className="p-6 bg-[#0b1120] rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <h3 className="text-lg font-bold text-white">Context Preservation</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Our proxy replaces sensitive data with contextual tokens so the LLM still understands sentence structures and intent.</p>
                    </div>
                    <div className="p-6 bg-[#0b1120] rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <h3 className="text-lg font-bold text-white">Zero Trust Architecture</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Data is cleaned at the proxy edge before routing external. No PII is logged in plain text or transmitted out.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PIIMasking;
