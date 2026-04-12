import React from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

const AuditTrail = () => {
    const events = [
        {
            time: '3:40:16 PM',
            date: '4/11/2026',
            reqId: 'f3ad171a...',
            risk: 47,
            decision: 'BLOCKED',
            violations: ['malicious intent', 'medium_risk_prompt_injection', 'prompt injection', 'prompt_injection', 'unauthorized access'],
            config: 'v2'
        },
        {
            time: '3:40:21 PM',
            date: '4/11/2026',
            reqId: 'cb8e4490...',
            risk: 0,
            decision: 'ALLOWED',
            violations: [],
            config: 'v2'
        },
        {
            time: '3:40:24 PM',
            date: '4/11/2026',
            reqId: '56c6fb7e...',
            risk: 75,
            decision: 'BLOCKED',
            violations: ['encoded_injection_base64', 'encoded_injection_hex', 'medium_risk_prompt_injection', 'pii', 'prompt_injection', 'secrets'],
            config: 'v2'
        },
        {
            time: '3:40:28 PM',
            date: '4/11/2026',
            reqId: 'a630de68...',
            risk: 57,
            decision: 'BLOCKED',
            violations: ['data breach', 'malicious intent', 'medium_risk_prompt_injection', 'pii', 'prompt_injection', 'unauthorized access'],
            config: 'v2'
        },
        {
            time: '3:40:40 PM',
            date: '4/11/2026',
            reqId: '86f9dd34...',
            risk: 0,
            decision: 'ALLOWED',
            violations: [],
            config: 'v2'
        },
        {
            time: '3:43:14 PM',
            date: '4/11/2026',
            reqId: '709e9216...',
            risk: 47,
            decision: 'BLOCKED',
            violations: ['malicious intent', 'medium_risk_prompt_injection', 'prompt injection', 'prompt_injection', 'security threat'],
            config: 'v2'
        },
        {
            time: '3:43:18 PM',
            date: '4/11/2026',
            reqId: '2e21dd72...',
            risk: 0,
            decision: 'ALLOWED',
            violations: [],
            config: 'v2'
        },
        {
            time: '3:43:21 PM',
            date: '4/11/2026',
            reqId: '7518a656...',
            risk: 75,
            decision: 'BLOCKED',
            violations: ['encoded_injection_base64', 'encoded_injection_hex', 'medium_risk_prompt_injection', 'pii', 'prompt_injection', 'secrets'],
            config: 'v2'
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 pt-32 pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Text */}
                <div className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 border border-indigo-200 text-indigo-700 mb-6 relative">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                        <span className="text-xs font-bold tracking-widest uppercase">Immutable Event Log</span>
                    </div>
                    <h1 className="text-5xl font-['Bebas_Neue'] tracking-widest text-[#0b1120] mb-6">
                        Complete Audit Trail
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                        Investigate and track every AI interaction. Privra maintains a comprehensive ledger of all incoming prompts and outgoing responses, highlighting exact policy violations, calculated risk scores, and mitigation decisions.
                    </p>
                </div>

                <div className="flex justify-end mb-4">
                    <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">
                        20 Events Logged
                    </span>
                </div>

                {/* Table Container */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 bg-white/50 text-xs font-bold text-slate-400 tracking-wider">
                                    <th className="px-6 py-6 w-32 uppercase">Time</th>
                                    <th className="px-6 py-6 w-40 uppercase">Request ID</th>
                                    <th className="px-6 py-6 w-20 uppercase">Risk</th>
                                    <th className="px-6 py-6 w-36 uppercase">Decision</th>
                                    <th className="px-6 py-6 uppercase">Violations</th>
                                    <th className="px-6 py-6 w-24 uppercase text-center">Config</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {events.map((event, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        {/* Time Column */}
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <div className="text-sm font-medium text-slate-600">{event.time}</div>
                                            <div className="text-xs text-slate-400 mt-0.5">{event.date}</div>
                                        </td>
                                        
                                        {/* Request ID Column */}
                                        <td className="px-6 py-5 font-mono text-sm">
                                            <a href="#" className="font-bold text-indigo-500 hover:text-indigo-600 hover:underline">{event.reqId}</a>
                                        </td>
                                        
                                        {/* Risk Column */}
                                        <td className="px-6 py-5 font-bold text-base">
                                            <span className={event.risk > 0 ? 'text-red-500' : 'text-emerald-500'}>
                                                {event.risk}
                                            </span>
                                        </td>
                                        
                                        {/* Decision Column */}
                                        <td className="px-6 py-5">
                                            {event.decision === 'BLOCKED' ? (
                                                <div className="inline-flex items-center gap-1.5 text-red-500 font-bold text-xs tracking-wider">
                                                    <ShieldAlert className="w-4 h-4" />
                                                    BLOCKED
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center gap-1.5 text-emerald-500 font-bold text-xs tracking-wider">
                                                    <ShieldCheck className="w-4 h-4" />
                                                    ALLOWED
                                                </div>
                                            )}
                                        </td>
                                        
                                        {/* Violations Column */}
                                        <td className="px-6 py-5">
                                            <div className="flex flex-wrap gap-2">
                                                {event.violations.map((violation, idx) => (
                                                    <span key={idx} className="inline-flex px-2 py-1 bg-[#f1f5f9] text-[#64748b] rounded-md text-[11px] font-semibold tracking-wide border border-slate-200">
                                                        {violation}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>

                                        {/* Config Column */}
                                        <td className="px-6 py-5 text-center text-sm font-medium text-slate-400">
                                            {event.config}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditTrail;
