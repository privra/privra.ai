import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

const DemoModal = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0b1120]/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-[#131d33] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Header Decoration */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="p-8 sm:p-10">
                    {!isSubmitted ? (
                        <>
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="h-8 w-8 text-cyan-400" />
                                <h2 className="text-3xl font-['Bebas_Neue'] text-white tracking-wide">Request a Demo</h2>
                            </div>
                            <p className="text-gray-400 font-light mb-8">
                                Secure your AI production stack with Privra AI. Fill out the form below and we'll be in touch at <span className="text-cyan-400">contact@privra.net</span>.
                            </p>

                            <form
                                name="demo-request"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <input type="hidden" name="form-name" value="demo-request" />

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="Jane Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Work Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="jane@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Company</label>
                                    <input
                                        required
                                        type="text"
                                        name="company"
                                        placeholder="Company Inc."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">How can we help?</label>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        placeholder="Tell us about your AI security needs..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    className="w-full mt-4 bg-cyan-400 hover:bg-cyan-300 text-black font-['Bebas_Neue'] text-2xl py-4 rounded-xl tracking-wider transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="h-6 w-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Submit Request
                                            <Send className="h-5 w-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-10">
                            <CheckCircle2 className="h-20 w-20 text-cyan-400 mx-auto mb-6" />
                            <h2 className="text-4xl font-['Bebas_Neue'] text-white mb-4 tracking-wide">Request Received</h2>
                            <p className="text-gray-400 text-lg font-light">
                                Thank you for your interest! A member of our security team will contact you shortly at your provided email.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-10 px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all font-['Bebas_Neue'] text-xl tracking-widest"
                            >
                                Close Window
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DemoModal;
