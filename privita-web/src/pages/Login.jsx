import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Get the redirect path from state, or default to home
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate a bit of loading for premium feel
        setTimeout(() => {
            const success = login(password);
            if (success) {
                navigate(from, { replace: true });
            } else {
                setError('Invalid access token. Please contact your administrator.');
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0b1120] px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-md w-full relative z-10">
                <div className="bg-[#131d33]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center mb-10">
                        <div className="relative mb-6">
                            <ShieldCheck className="h-16 w-16 text-cyan-400 relative z-10" />
                            <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full scale-150 animate-pulse" />
                        </div>
                        <h1 className="text-4xl font-['Bebas_Neue'] tracking-wider text-white mb-2">PRIVRA AI</h1>
                        <p className="text-gray-400 text-sm text-center">Enter your secure access token to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2 px-1">
                                Access Token
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="block w-full pl-11 pr-4 py-4 bg-[#0b1120]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 p-4 rounded-xl text-sm animate-in fade-in slide-in-from-top-1">
                                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-cyan-500/20 group disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span className="text-lg uppercase tracking-widest font-['Bebas_Neue'] pt-1">Authorize Access</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 pt-6 border-t border-white/5">
                        <p className="text-gray-500 text-[10px] text-center uppercase tracking-[0.2em]">
                            Protected by Privra AI Enforcement Layer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
