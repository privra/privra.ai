import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Cloud, Server, ShieldCheck, PlayCircle, Target, Users, Globe, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navLinks = [
        { name: 'HOME', href: '#' },
        { name: 'PRODUCTS', href: '#', dropdown: 'products' },
        { name: 'DEMOS', href: '#', dropdown: 'demos' },
        { name: 'ABOUT', href: '#', dropdown: 'about' }
    ];

    const products = [
        {
            title: 'Platform',
            items: [
                { name: 'PrivraAI Cloud', icon: <Cloud className="h-5 w-5" />, desc: 'Fully managed AI security at scale', href: '/about#deployment' },
                { name: 'PrivraAI OnPrem', icon: <Server className="h-5 w-5" />, desc: 'Complete control in your infrastructure', href: '/about#deployment' },
                { name: 'Bring your Own Cloud', icon: <ShieldCheck className="h-5 w-5" />, desc: 'Seamless integration with your existing setup', href: '/about#deployment' }
            ]
        },
        {
            title: 'Try Privra AI',
            items: [
                { name: 'Privra AI Docker', icon: <PlayCircle className="h-5 w-5" />, desc: 'Run locally in minutes', href: '/setup-docker' }
            ]
        },
        {
            title: 'Capabilities',
            items: [
                { name: 'PII Masking', icon: <ShieldCheck className="h-5 w-5" />, desc: 'Anonymize sensitive data in real-time', href: '/pii-masking' },
                { name: 'Injection Defense', icon: <ShieldCheck className="h-5 w-5" />, desc: 'Block prompt injection attacks', href: '/injection-defense' },
                { name: 'Secret Detection', icon: <ShieldCheck className="h-5 w-5" />, desc: 'Prevent credentials from leaking', href: '/secret-detection' },
                { name: 'Analytics', icon: <ShieldCheck className="h-5 w-5" />, desc: 'Insights and reporting on AI usage', href: '/analytics' },
                { name: 'Audit Trail', icon: <ShieldCheck className="h-5 w-5" />, desc: 'Security events and AI traffic log', href: '/audit-trail' }
            ]
        }
    ];

    const demos = [
        {
            title: 'Live Demos',
            items: [
                {
                    name: 'Gatekeeper Security Showcase',
                    icon: <ShieldCheck className="h-5 w-5" />,
                    desc: 'Real-time side-by-side security analysis',
                    href: '/demo'
                }
            ]
        }
    ];

    const about = [
        {
            title: 'Our Story',
            items: [
                { name: 'Mission', icon: <Target className="h-5 w-5" />, desc: 'The Enforcement Layer for AI Applications', href: '/about#mission' },
                { name: 'Capabilities', icon: <ShieldCheck className="h-5 w-5" />, desc: 'PII Masking, Injection Prevention, Secret Detection', href: '/about#capabilities' }
            ]
        },
        {
            title: 'Deployment',
            items: [
                { name: 'Cloud & On-Prem', icon: <Cloud className="h-5 w-5" />, desc: 'Flexible hosting options for every scale', href: '/about#deployment' },
                { name: 'Global Compliance', icon: <Globe className="h-5 w-5" />, desc: 'Secure AI traffic globally', href: '/about#compliance' }
            ]
        }
    ];

    const dropdownData = { products, demos, about };

    return (
        <nav className="fixed w-full z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">

                    {/* Logo (Left) */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer min-w-[250px] gap-4 group">
                        <div className="relative">
                            <ShieldCheck className="h-10 w-10 text-cyan-400 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 animate-pulse" />
                        </div>
                        <span className="text-5xl font-['Bebas_Neue'] tracking-wider text-white">PRIVRA AI</span>
                    </div>

                    {/* Desktop Navigation (Center) */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex items-center space-x-12">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group flex items-center">
                                    {link.dropdown ? (
                                        <button
                                            onMouseEnter={() => setActiveDropdown(link.dropdown)}
                                            className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 text-2xl font-['Bebas_Neue'] tracking-widest transition-colors outline-none cursor-pointer h-12"
                                        >
                                            <span className="mt-1">{link.name}</span>
                                            <ChevronDown className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ) : (
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-300 hover:text-white px-4 py-2 text-2xl font-['Bebas_Neue'] tracking-widest transition-colors flex items-center h-12"
                                        >
                                            <span className="mt-1">{link.name}</span>
                                        </a>
                                    )}

                                    {link.dropdown && activeDropdown === link.dropdown && (
                                        <div
                                            onMouseLeave={() => setActiveDropdown(null)}
                                            className={`absolute left-1/2 -translate-x-1/2 mt-2 top-full bg-[#131d33] border border-white/10 rounded-xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-300 z-[100] ${link.dropdown === 'products' ? 'w-[850px]' : 'w-96'}`}
                                        >
                                            <div className={`${link.dropdown === 'products' ? 'grid grid-cols-3 gap-8' : 'space-y-6'}`}>
                                                {dropdownData[link.dropdown].map((section, idx) => (
                                                    <div key={section.title || idx}>
                                                        {section.title && (
                                                            <div className="text-cyan-400 font-['Bebas_Neue'] text-xl tracking-widest mb-4 px-2 opacity-70 uppercase">
                                                                {section.title}
                                                            </div>
                                                        )}
                                                        {section.items.map((item) => {
                                                            const isInternal = item.href && item.href.startsWith('/');
                                                            const Component = isInternal ? Link : 'a';
                                                            const props = isInternal ? { to: item.href } : {
                                                                href: item.href || '#',
                                                                target: item.href && item.href.startsWith('http') ? '_blank' : undefined,
                                                                rel: item.href && item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                                                            };

                                                            return (
                                                                <Component
                                                                    key={item.name}
                                                                    {...props}
                                                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-all group/item"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                >
                                                                    <div className="mt-1 text-cyan-400 group-hover/item:scale-110 transition-transform">{item.icon}</div>
                                                                    <div>
                                                                        <div className="text-white font-semibold text-sm leading-tight">{item.name}</div>
                                                                        <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                                                                    </div>
                                                                </Component>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placeholder for right side */}
                    <div className="hidden md:flex items-center min-w-[200px] justify-end">
                        <button
                            onClick={logout}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-['Bebas_Neue'] text-xl tracking-widest px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5"
                        >
                            <LogOut className="h-5 w-5" />
                            <span className="mt-0.5">Logout</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-400 hover:text-white p-2"
                        >
                            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0b1120] border-b border-white/5 px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block text-gray-300 hover:text-white px-3 py-4 text-3xl font-['Bebas_Neue'] tracking-widest border-b border-white/5 last:border-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            logout();
                            setIsMenuOpen(false);
                        }}
                        className="flex items-center gap-3 text-red-400 hover:text-red-300 px-3 py-4 text-3xl font-['Bebas_Neue'] tracking-widest w-full text-left"
                    >
                        <LogOut className="h-7 w-7" />
                        <span className="mt-1">Logout</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
