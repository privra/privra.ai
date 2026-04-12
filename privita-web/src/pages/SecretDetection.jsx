import React from 'react';
import { KeyRound, ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';

const SecretDetection = () => {
    return (
        <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 font-sans relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Text */}
                <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-500 mb-6 relative">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                        <span className="text-xs font-bold tracking-widest uppercase">Secret Scanner Active</span>
                    </div>
                    <h1 className="text-5xl font-['Bebas_Neue'] tracking-widest text-white mb-6 drop-shadow-lg">
                        Credential Leak Prevention
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                        Automatically scan and block sensitive credentials from leaving your infrastructure. Our secret scanner prevents API keys, AWS tokens, JWTs, and passwords from ever reaching public LLM endpoints.
                    </p>
                </div>

                {/* Demonstration Section */}
                <div className="bg-[#0b1120] rounded-3xl p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Outbound Prompt Container */}
                        <div className="flex-1 w-full bg-white/5 p-6 rounded-2xl border border-white/5 relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-gray-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-gray-600 flex items-center gap-1.5">
                                <Lock className="w-3 h-3 text-amber-500" />
                                Outbound Request
                            </div>
                            <div className="mt-2 text-gray-300 font-mono text-sm leading-relaxed">
                                <span className="text-gray-500">&gt; User: Can you help me debug this database connection code?</span>
                                <br/><br/>
                                <span className="text-sky-400">from</span> sqlalchemy <span className="text-sky-400">import</span> create_engine
                                <br/><br/>
                                <span className="text-gray-600">{"# Application secrets"}</span><br/>
                                AWS_KEY = <span className="text-amber-400 bg-amber-500/20 px-1 rounded">"AKIAIOSFODNN7EXAMPLE"</span><br/>
                                DB_PASS = <span className="text-amber-400 bg-amber-500/20 px-1 rounded">"s3cr3t_p@ssw0rd!"</span><br/>
                                <br/>
                                engine = create_engine(f"postgresql://admin:{"{DB_PASS}"}@localhost/db")
                            </div>
                        </div>

                        {/* Middle Arrow / Engine */}
                        <div className="flex flex-col items-center justify-center shrink-0">
                            <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 mb-2 relative">
                                <KeyRound className="h-8 w-8 text-amber-500" />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Secret Scanner</span>
                        </div>

                        {/* Intercepted Output Container */}
                        <div className="flex-1 w-full bg-amber-950/20 p-6 rounded-2xl border border-amber-500/20 relative">
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-amber-900/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-amber-500/30 flex items-center gap-1.5">
                                <ShieldAlert className="w-3 h-3" />
                                Hard Block Applied
                            </div>
                            <div className="mt-2 text-gray-300 font-mono text-sm leading-relaxed">
                                <div className="text-amber-500 font-bold mb-4">Action: Request Rejected</div>
                                <span className="text-gray-500">{"{"}</span><br/>
                                &nbsp;&nbsp;"status": "<span className="text-rose-500 font-bold">BLOCKED</span>",<br/>
                                &nbsp;&nbsp;"reason": "<span className="text-white font-bold">High-entropy secrets detected in payload</span>",<br/>
                                &nbsp;&nbsp;"matches": [<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;"<span className="text-amber-500 font-bold">aws_access_key_id</span>",<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;"<span className="text-amber-500 font-bold">generic_password</span>"<br/>
                                &nbsp;&nbsp;],<br/>
                                &nbsp;&nbsp;"message": "<span className="text-gray-400">Please extract credentials to environment variables before using AI assistance.</span>"<br/>
                                <span className="text-gray-500">{"}"}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
                    <div className="p-6 bg-[#0b1120] rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-amber-500" />
                        <h3 className="text-lg font-bold text-white">High-Entropy Detection</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Goes beyond simple Regex. Privra analyzes token entropy to detect previously unseen keys, proprietary tokens, and randomly generated secrets.</p>
                    </div>
                    <div className="p-6 bg-[#0b1120] rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-amber-500" />
                        <h3 className="text-lg font-bold text-white">Pre-Configured Patterns</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Out-of-the-box support for hundreds of vendor-specific key formats including AWS, GCP, Stripe, Slack, and GitHub tokens.</p>
                    </div>
                    <div className="p-6 bg-[#0b1120] rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-4">
                        <CheckCircle2 className="w-6 h-6 text-amber-500" />
                        <h3 className="text-lg font-bold text-white">Developer Enforcement</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Enforce secure coding practices by blocking lazy copy-pasting of config files. Ensure local developers separate state from logic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecretDetection;
