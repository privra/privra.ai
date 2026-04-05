import React from 'react';
import { Shield, UserCheck, FileSearch } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, borderColor }) => (
    <div className={`relative group p-8 rounded-2xl bg-[#1e293b]/40 backdrop-blur-xl border ${borderColor} transition-all duration-500 hover:scale-[1.02] flex flex-col items-center text-center h-full`}>
        <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-4 rounded-full bg-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-['Bebas_Neue'] tracking-wide">{title}</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: Shield,
            title: "Stop Prompt Injection Attacks",
            description: "Block malicious inputs before they reach your model.",
            borderColor: "border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        },
        {
            icon: UserCheck,
            title: "Prevent Sensitive Data Exposure",
            description: "Detect and stop leakage across prompts and responses.",
            borderColor: "border-white/10"
        },
        {
            icon: FileSearch,
            title: "Control AI Behavior in Real Time",
            description: "Apply policy enforcement at runtime for every request.",
            borderColor: "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        }
    ];

    return (
        <section id="features" className="pt-12 pb-24 relative bg-[#0f172a]">
            {/* Background Gradient connecting Hero to Features */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e293b]/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
