import React, { useState } from 'react';
import { Terminal, Copy, CheckCircle2, PlayCircle, ShieldCheck, HardDrive, Network, Cpu, LayoutDashboard, FileText, MessageSquare, ShieldAlert } from 'lucide-react';

const DockerSetup = () => {
    const [copiedStates, setCopiedStates] = useState({});

    const handleCopy = (id, text) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedStates({ ...copiedStates, [id]: true });
        setTimeout(() => {
            setCopiedStates({ ...copiedStates, [id]: false });
        }, 2000);
    };

    const steps = [
        {
            id: 'pull',
            title: 'Pull the Latest Image',
            description: 'Download the official, unified Privra AI container directly from our Docker registry.',
            commands: ['docker pull privra/privra-ai-unified:latest']
        },
        {
            id: 'env',
            title: 'Configure Environment Variables',
            description: 'Create a local .env file to hold your proxy keys and configuration settings.',
            notes: [
                'OPENAI_API_KEY is required for OpenAI forwarding.',
                'PROXY_API_KEY defaults to my-proxy-key-123 if omitted.'
            ],
            commands: [
                'echo "OPENAI_API_KEY=your_key_here" > .env',
                'echo "API_PORT=8000" >> .env'
            ]
        },
        {
            id: 'run',
            title: 'Run the Proxy Server',
            description: 'Start the container in detached mode, exposing the UI port. It will automatically initialize the interception engines.',
            commands: [
                'docker rm -f privra-ai-unified || true',
                'docker run -d --name privra-ai-unified -p 8000:8000 -p 5174:5174 -p 3000:3000 --env-file .env privra/privra-ai-unified:latest'
            ]
        },
        {
            id: 'verify',
            title: 'Verify Deployment',
            description: 'Confirm the container is running correctly. The first command checks the container status, and the second tails the logs to watch the proxy initialize.',
            commands: [
                'docker ps --filter "name=privra-ai-unified"',
                'docker logs --tail 100 privra-ai-unified'
            ]
        },
        {
            id: 'access',
            title: 'Access Applications',
            description: 'Once the container is running and healthy, open your browser to access the core services and demonstration applications.',
            links: [
                { name: 'Proxy Admin UI', url: 'http://localhost:8000/ui/', icon: <LayoutDashboard className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" /> },
                { name: 'Proxy API Docs', url: 'http://localhost:8000/docs', icon: <FileText className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" /> },
                { name: 'Client UI Assistant', url: 'http://localhost:5174', icon: <MessageSquare className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />, demo: true },
                { name: 'Security Showcase', url: 'http://localhost:3000', icon: <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />, demo: true }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 font-sans relative">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Text */}
                <div className="mb-16 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 mb-6 relative">
                        <PlayCircle className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-widest uppercase">Quick Start Guide</span>
                    </div>
                    <h1 className="text-5xl font-['Bebas_Neue'] tracking-widest text-white mb-6 drop-shadow-lg">
                        Try Privra AI using Docker
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                        Deploy the complete AI Security proxy onto your local machine in minutes. This unified container includes the core AI firewall, the local database, and the visualization UI dashboard.
                    </p>
                </div>

                {/* Instructions Setup */}
                <div className="space-y-8">
                    {/* Prerequisites */}
                    <div className="p-8 bg-[#0b1120] rounded-2xl border border-white/10 shadow-2xl">
                        <div className="text-sm font-bold text-cyan-400 mb-4 tracking-wide uppercase">Prerequisites</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex gap-4">
                                <HardDrive className="w-6 h-6 text-cyan-500 shrink-0" />
                                <div>
                                    <div className="font-bold text-white text-sm mb-1">Docker Engine</div>
                                    <div className="text-sm text-gray-400 leading-relaxed">Docker Desktop (Windows/macOS) or Docker Engine (Linux).</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Network className="w-6 h-6 text-cyan-500 shrink-0" />
                                <div>
                                    <div className="font-bold text-white text-sm mb-1">Free Ports</div>
                                    <div className="text-sm text-gray-400 leading-relaxed">Ensure ports 8000, 5174, and 3000 are available on your host.</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Cpu className="w-6 h-6 text-cyan-500 shrink-0" />
                                <div>
                                    <div className="font-bold text-white text-sm mb-1">Supported Platforms</div>
                                    <div className="text-sm text-gray-400 leading-relaxed">linux/amd64, linux/arm64 (Apple Silicon & ARM64 Linux).</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="bg-[#0b1120] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                            {/* Step Info */}
                            <div className="p-8 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-white/5">
                                <div className="text-sm font-bold text-cyan-400 mb-2 tracking-wide uppercase">Step {index + 1}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                                {step.notes && (
                                    <div className="mt-4 p-4 bg-cyan-950/40 rounded-xl border border-cyan-500/20">
                                        <div className="text-[11px] font-bold text-cyan-400 mb-2 uppercase tracking-widest">Important Notes</div>
                                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1.5 marker:text-cyan-500">
                                            {step.notes.map((note, idx) => (
                                                <li key={idx}>{note}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Dynamic Content Window */}
                            <div className={`p-6 lg:w-2/3 flex flex-col justify-center relative group ${step.links ? 'bg-white/5' : 'bg-transparent'}`}>
                                {step.links ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {step.links.map((link, lIdx) => (
                                            <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="px-3 py-4 bg-[#131d33] border border-white/10 rounded-xl shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all group/link flex items-start gap-2.5 text-left">
                                                {link.icon}
                                                <div className="min-w-0 flex-1">
                                                    <div className="text-sm font-bold text-white flex flex-wrap items-center gap-1.5 group-hover/link:text-cyan-400 transition-colors leading-tight">
                                                        {link.name}
                                                        {link.demo && <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-gray-300 uppercase tracking-wider shrink-0 mt-0.5">Demo</span>}
                                                    </div>
                                                    <div className="text-[10px] tracking-tight text-gray-400 mt-1.5 font-mono whitespace-nowrap" title={link.url}>{link.url}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                                            <span className="ml-2 text-xs font-mono text-gray-500">bash</span>
                                        </div>
                                        <div className="font-mono text-sm text-emerald-400 overflow-x-auto pb-2 pr-12">
                                            {step.commands?.map((cmd, idx) => (
                                                <div key={idx} className="whitespace-nowrap flex">
                                                    <span className="text-gray-600 mr-2 shrink-0">$</span>
                                                    <span>{cmd}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => handleCopy(step.id, step.commands?.join('\n'))}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                            title="Copy to clipboard"
                                        >
                                            {copiedStates[step.id] ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DockerSetup;
