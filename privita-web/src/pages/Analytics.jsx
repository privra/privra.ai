import React from 'react';
import { RefreshCw, Activity, Shield, Key, Eye, AlertTriangle, Search, Satellite, Ban, Terminal } from 'lucide-react';

const Analytics = () => {
    return (
        <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 font-sans relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Text */}
                <div className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400 mb-6 relative">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-bold tracking-widest uppercase">Traffic Surveillance Online</span>
                    </div>
                    <h1 className="text-5xl font-['Bebas_Neue'] tracking-widest text-white mb-6 drop-shadow-lg">
                        Real-Time Security Intelligence
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                        Gain complete observability over your AI infrastructure. Privra's active security layer intercepts malicious prompts, anonymizes PII, and identifies data leaks across all configured endpoints in real-time.
                    </p>
                </div>

                {/* Top Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    {/* Card 1 */}
                    <div className="bg-[#0b1120] rounded-2xl p-6 shadow-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between h-36">
                        <Satellite className="h-6 w-6 text-gray-500" />
                        <div>
                            <div className="text-4xl font-bold text-white">20</div>
                            <div className="text-sm font-medium text-gray-400 mt-1">Total Audit</div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500/80"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0b1120] rounded-2xl p-6 shadow-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between h-36">
                        <Ban className="h-6 w-6 text-rose-500" />
                        <div>
                            <div className="text-4xl font-bold text-white">12</div>
                            <div className="text-sm font-medium text-gray-400 mt-1">Blocked</div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-rose-500/80"></div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0b1120] rounded-2xl p-6 shadow-2xl border border-white/5 relative items-start flex flex-col justify-between h-36">
                        <div className="text-xl">🎭</div>
                        <div>
                            <div className="text-4xl font-bold text-white">0</div>
                            <div className="text-sm font-medium text-gray-400 mt-1">Masked</div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0b1120] rounded-2xl p-6 shadow-2xl border border-white/5 relative flex flex-col justify-between h-36">
                        <Search className="h-6 w-6 text-gray-500" />
                        <div>
                            <div className="text-4xl font-bold text-white">0</div>
                            <div className="text-sm font-medium text-gray-400 mt-1">Review</div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0b1120] rounded-2xl p-6 shadow-2xl border border-white/5 relative flex flex-col justify-between h-36">
                        <AlertTriangle className="h-6 w-6 text-amber-500" />
                        <div>
                            <div className="text-4xl font-bold text-white">0</div>
                            <div className="text-sm font-medium text-gray-400 mt-1">Errors</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Interception Analytics */}
                    <div className="bg-[#0b1120] rounded-2xl p-8 shadow-2xl border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-6">Interception Analytics</h2>
                        <div className="bg-white/5 rounded-2xl p-8 flex items-center gap-8 border border-white/5">
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="8" fill="none" />
                                    <circle cx="50" cy="50" r="40" stroke="#6366f1" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="100.48" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold text-indigo-400">60%</span>
                                    <span className="text-[10px] font-bold text-gray-500 tracking-wider">SHIELD</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white">Mitigation Rate</h3>
                                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                    Volume of requests automatically intercepted by security scanners.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-6">
                        {/* Active Protections */}
                        <div className="bg-[#0b1120] rounded-2xl p-8 shadow-2xl border border-white/5 flex-1">
                            <h2 className="text-lg font-bold text-white mb-6">Active Protections</h2>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="text-gray-500"><Terminal className="h-4 w-4" /></div>
                                        <span className="font-semibold text-sm text-gray-300">Injection Filter</span>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-400 tracking-wide">ACTIVE</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="text-gray-500"><Eye className="h-4 w-4" /></div>
                                        <span className="font-semibold text-sm text-gray-300">PII Masking</span>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-400 tracking-wide">ACTIVE</span>
                                </div>
                                <div className="flex items-center justify-between pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="text-gray-500"><Key className="h-4 w-4" /></div>
                                        <span className="font-semibold text-sm text-gray-300">Secret Scanner</span>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-400 tracking-wide">ACTIVE</span>
                                </div>
                            </div>
                        </div>

                        {/* Policy Governance */}
                        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-white/5 rounded-xl p-6 shadow-2xl flex items-center justify-between">
                            <span className="font-medium text-indigo-300 text-sm">Policy Governance</span>
                            <button className="px-5 py-2 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded text-xs font-bold tracking-wider hover:bg-indigo-500/40 transition">
                                MANAGE
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Analytics;
