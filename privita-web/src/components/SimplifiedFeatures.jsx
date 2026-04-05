import React from 'react';
import { Shield, UserCheck, FileSearch } from 'lucide-react';

const SimplifiedFeatures = () => {
    const features = [
        {
            title: 'Prompt and Response Security',
            icon: <Shield className="h-10 w-10" />,
            borderColor: 'border-cyan-500/30',
            glowColor: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]'
        },
        {
            title: 'PII and Sensitive Data Protection',
            icon: <UserCheck className="h-10 w-10" />,
            borderColor: 'border-white/10',
            glowColor: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
        },
        {
            title: 'Policy Enforcement and Audit Trail',
            icon: <FileSearch className="h-10 w-10" />,
            borderColor: 'border-purple-500/30',
            glowColor: 'group-hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]'
        }
    ];

    return (
        <section className="bg-[#0b1120] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-2xl bg-[#131d33] border ${feature.borderColor} ${feature.glowColor} transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center`}
                        >
                            <div className="p-4 rounded-xl bg-gray-800/50 text-white mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-['Outfit'] font-semibold text-white tracking-wide">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SimplifiedFeatures;
