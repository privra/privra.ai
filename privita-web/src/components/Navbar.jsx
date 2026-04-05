import React, { useState } from 'react';
import { ChevronDown, Menu, X, Cloud, Server, ShieldCheck, PlayCircle, Target, Milestone, Shield } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navLinks = [
        { name: 'HOME', href: '#' },
        { name: 'PRODUCTS', href: '#', dropdown: 'products' },
        { name: 'DEMOS', href: '#', dropdown: 'demos' }
    ];

    const products = [
        {
            title: 'Platform',
            items: [
                { name: 'PrivraAI Cloud', icon: <Cloud className="h-5 w-5" />, desc: 'Fully managed AI security at scale', href: '#' },
                { name: 'PrivraAI OnPrem', icon: <Server className="h-5 w-5" />, desc: 'Complete control in your infrastructure', href: '#' },
                { name: 'Bring your Own Cloud', icon: <ShieldCheck className="h-5 w-5" />, desc: 'Seamless integration with your existing setup', href: '#' }
            ]
        },
        {
            title: 'Try Privra AI',
            items: [
                { name: 'Privra AI Docker', icon: <PlayCircle className="h-5 w-5" />, desc: 'Run locally in minutes', href: 'https://hub.docker.com/r/vjvkram/privra' }
            ]
        }
    ];

    const demos = [
        {
            name: 'Security Scenarios',
            icon: <PlayCircle className="h-5 w-5" />,
            desc: 'See Privra AI in action across real scenarios',
            href: 'https://hub.docker.com/r/vjvkram/privra'
        }
    ];



    const dropdownData = { products, demos };

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
                                            className={`absolute left-1/2 -translate-x-1/2 mt-2 top-full bg-[#131d33] border border-white/10 rounded-xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-300 z-[100] ${link.dropdown === 'products' ? 'w-[600px]' : 'w-80'}`}
                                        >
                                            <div className={`${link.dropdown === 'products' ? 'grid grid-cols-2 gap-8' : 'space-y-1'}`}>
                                                {link.dropdown === 'products' ? (
                                                    products.map((section) => (
                                                        <div key={section.title}>
                                                            <div className="text-cyan-400 font-['Bebas_Neue'] text-xl tracking-widest mb-4 px-2 opacity-70 uppercase">
                                                                {section.title}
                                                            </div>
                                                            <div className="space-y-1">
                                                                {section.items.map((item) => (
                                                                    <a
                                                                        key={item.name}
                                                                        href={item.href || '#'}
                                                                        target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
                                                                        rel={item.href && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group/item"
                                                                    >
                                                                        <div className="mt-1 text-cyan-400 group-hover/item:scale-110 transition-transform">{item.icon}</div>
                                                                        <div>
                                                                            <div className="text-white font-semibold text-sm leading-tight">{item.name}</div>
                                                                            <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                                                                        </div>
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    demos.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href || '#'}
                                                            target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
                                                            rel={item.href && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group/item"
                                                        >
                                                            <div className="mt-1 text-cyan-400 group-hover/item:scale-110 transition-transform">{item.icon}</div>
                                                            <div>
                                                                <div className="text-white font-semibold text-sm leading-tight">{item.name}</div>
                                                                <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                                                            </div>
                                                        </a>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placeholder for right side */}
                    <div className="hidden md:block min-w-[200px]"></div>

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
                </div>
            )}
        </nav>
    );
};

export default Navbar;
