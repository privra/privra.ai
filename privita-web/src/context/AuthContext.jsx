import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isLoggedIn') === 'true'
    );

    const login = (password) => {
        // Basic mock authentication - can be replaced with real backend later
        if (password === 'privra2025') {
            localStorage.setItem('isLoggedIn', 'true');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
