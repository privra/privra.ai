import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0b1120] py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8 text-gray-500 text-sm font-['Outfit']">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>

                    <div className="flex gap-6 text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
