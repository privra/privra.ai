import React from 'react';
import { Shield, ArrowRight, EyeOff, CheckCircle2 } from 'lucide-react';

const PIIMasking = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 pt-32 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Text */}
                <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/50 border border-cyan-200 text-cyan-700 mb-6 relative">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                        <span className="text-xs font-bold tracking-widest uppercase">Privacy Protection</span>
                    </div>
                    <h1 className="text-5xl font-['Bebas_Neue'] tracking-widest text-[#0b1120] mb-6">
                        Active PII Masking
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                        Automatically redact sensitive personal data—like SSNs, emails, and credit card numbers—before your prompts ever reach external LLM providers. Guarantee data privacy and enforce strict compliance seamlessly.
                    </p>
                </div>

                {/* Demonstration Section */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Original Prompt Container */}
                        <div className="flex-1 w-full bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-rose-200">
                                Unprotected Entry
                            </div>
                            <div className="mt-2 text-slate-700 font-mono text-sm leading-relaxed">
                                <span className="text-slate-400">&gt; System: Please analyze this user profile.</span>
                                <br/><br/>
                                Name: John Doe<br/>
                                Email: <span className="bg-rose-200/50 text-rose-800 px-1 rounded font-semibold">john.doe@example.com</span><br/>
                                SSN: <span className="bg-rose-200/50 text-rose-800 px-1 rounded font-semibold">***-**-6789</span><br/>
                                Notes: User has requested password reset for account.
                            </div>
                        </div>

                        {/* Middle Arrow / Engine */}
                        <div className="flex flex-col items-center justify-center shrink-0">
                            <div className="w-16 h-16 bg-[#0b1120] rounded-full flex items-center justify-center shadow-lg mb-2 relative">
                                <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-ping opacity-20"></div>
                                <Shield className="h-8 w-8 text-cyan-400" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Privra Proxy</span>
                        </div>

                        {/* Masked Prompt Container */}
                        <div className="flex-1 w-full bg-[#f0fdfa] p-6 rounded-2xl border border-cyan-100 relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-cyan-100 text-cyan-800 text-[10px] font-bold uppercase tracking-wider rounded-md border border-cyan-200 flex items-center gap-1.5">
                                <EyeOff className="w-3 h-3" />
                                Masked Output
                            </div>
                            <div className="mt-2 text-slate-700 font-mono text-sm leading-relaxed">
                                <span className="text-slate-400">&gt; System: Please analyze this user profile.</span>
                                <br/><br/>
                                Name: <span className="bg-cyan-200/50 text-cyan-800 px-1 rounded font-bold">[REDACTED_PERSON]</span><br/>
                                Email: <span className="bg-cyan-200/50 text-cyan-800 px-1 rounded font-bold">[REDACTED_EMAIL]</span><br/>
                                SSN: <span className="bg-cyan-200/50 text-cyan-800 px-1 rounded font-bold">[REDACTED_SSN]</span><br/>
                                Notes: User has requested password flex for account.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        <h3 className="text-lg font-bold text-slate-800">50+ PII Entities</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Instantly recognize and redact names, financial data, health records, secrets, and local identifiers automatically.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        <h3 className="text-lg font-bold text-slate-800">Context Preservation</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Our proxy replaces sensitive data with contextual tokens so the LLM still understands sentence structures and intent.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        <h3 className="text-lg font-bold text-slate-800">Zero Trust Architecture</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Data is cleaned at the proxy edge before routing external. No PII is logged in plain text or transmitted out.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PIIMasking;
