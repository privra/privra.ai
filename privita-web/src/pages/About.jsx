import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Target, ShieldCheck, Cloud, Globe, CheckCircle2, Lock, Cpu, Zap, Activity } from 'lucide-react';

const SectionHeader = ({ title, highlight, description }) => (
    <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-['Bebas_Neue'] text-white uppercase tracking-tight mb-6">
            {title} <span className="text-cyan-400">{highlight}</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl font-light leading-relaxed">
            {description}
        </p>
    </div>
);

const FeatureCard = ({ icon, title, items }) => (
    <div className="bg-[#131d33] border border-white/5 p-8 rounded-3xl hover:border-cyan-400/20 transition-all duration-300 group">
        <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-2xl font-['Bebas_Neue'] text-white mb-6 uppercase tracking-widest">{title}</h3>
        <ul className="space-y-4">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const About = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <main className="flex-grow pt-32 pb-24 md:pt-48 bg-[#0b1120] relative">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-screen bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Mission Section */}
                <section id="mission" className="mb-32">
                    <SectionHeader
                        title="OUR"
                        highlight="MISSION"
                        description="At Privra AI, we are building the industry's first true Enforcement Layer for the GenAI era. Our goal is simple: to make AI adoption safe by default for every enterprise."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#131d33] to-[#0b1120] border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-3xl font-['Bebas_Neue'] text-white mb-6 uppercase tracking-widest">Bridging the Trust Gap</h4>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    The rapid adoption of Large Language Models (LLMs) has created a new frontier of security risks. Organizations are caught between the productivity gains of AI and the catastrophic risks of data leaks, prompt injections, and compliance failures.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Privra AI sits at this intersection, providing a real-time security proxy that sanitizes every prompt and response. We ensure that your sensitive data never leaves your perimeter and that malicious instructions never reach your models.
                                </p>
                            </div>
                            <Target className="absolute -bottom-10 -right-10 w-64 h-64 text-cyan-400 opacity-5" />
                        </div>
                        <div className="bg-cyan-400 p-10 rounded-[2.5rem] flex flex-col justify-center shadow-2xl shadow-cyan-400/20">
                            <h4 className="text-3xl font-['Bebas_Neue'] text-black mb-4 uppercase tracking-widest">Security First</h4>
                            <p className="text-black/80 font-medium leading-relaxed">
                                We believe that security shouldn't be an afterthought or a "best effort." Our proxy enforces strict compliance policies in real-time, with sub-200ms latency.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section id="capabilities" className="mb-32 pt-24 border-t border-white/5">
                    <SectionHeader
                        title="KEY"
                        highlight="CAPABILITIES"
                        description="Deep technical enforcement across the entire AI interaction lifecycle."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<ShieldCheck className="w-6 h-6 text-cyan-400" />}
                            title="PII Masking"
                            items={[
                                "Real-time detection of SSNs, emails, and phone numbers",
                                "Context-aware redaction (Names, Locations, DOBs)",
                                "Pattern-based and semantic detection algorithms",
                                "Pre-processing of RAG-retrieved datasets"
                            ]}
                        />
                        <FeatureCard
                            icon={<Zap className="w-6 h-6 text-cyan-400" />}
                            title="Injection Defense"
                            items={[
                                "Instruction override prevention (Jailbreaks)",
                                "DAN-mode and authority manipulation detection",
                                "Base64 and multi-stage payload analysis",
                                "Policy-based prompt filtering"
                            ]}
                        />
                        <FeatureCard
                            icon={<Lock className="w-6 h-6 text-cyan-400" />}
                            title="Secret Detection"
                            items={[
                                "Automated identification of API keys and tokens",
                                "Database connection string interception",
                                "Environment variable protection",
                                "Blocking of proprietary code snippets"
                            ]}
                        />
                    </div>
                </section>

                {/* Deployment Section */}
                <section id="deployment" className="mb-32 pt-24 border-t border-white/5">
                    <SectionHeader
                        title="FLEXIBLE"
                        highlight="DEPLOYMENT"
                        description="Deploy where your data lives. We provide options for managed cloud, on-premises, and self-hosted environments."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex bg-[#131d33] border border-white/5 p-8 rounded-[2rem] gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                <Cloud className="w-8 h-8 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Privra AI Cloud</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    A multi-tenant, fully managed SaaS offering. Perfect for teams that want immediate protection without the overhead of infrastructure management.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-[#131d33] border border-white/5 p-8 rounded-[2rem] gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                                <Cpu className="w-8 h-8 text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Self-Hosted / On-Prem</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Run Privra AI within your own private VPC or on-premise datacenter. Keep maximum control over data residency and compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section id="compliance" className="pt-24 border-t border-white/5">
                    <div className="bg-gradient-to-r from-indigo-900/20 to-cyan-900/20 border border-white/10 p-12 rounded-[3rem] text-center">
                        <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-['Bebas_Neue'] text-white uppercase tracking-tight mb-6">
                            GLOBAL <span className="text-cyan-400">COMPLIANCE</span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            Securing AI traffic globally with built-in data residency controls. We help enterprises stay compliant with HIPAA, GDPR, SOC2, and industry-specific regulations.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {["GDPR Ready", "SOC2 Type II", "HIPAA Aligned", "ISO 27001"].map(badge => (
                                <div key={badge} className="px-6 py-2 rounded-full border border-white/20 text-white font-['Bebas_Neue'] tracking-widest text-sm bg-white/5">
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
