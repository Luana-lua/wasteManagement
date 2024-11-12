import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ componenteFilho }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded_user = jwtDecode(token);
            setUser(decoded_user);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        const decoded_user = jwtDecode(token);
        setUser(decoded_user);
        setIsAuthenticated(true);
        window.location.href = '/api/collections'; 
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login}}>
            {componenteFilho}
        </AuthContext.Provider>
    );
};