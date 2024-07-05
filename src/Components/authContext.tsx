'use client'
import { createContext, useState, useEffect, useContext } from 'react';
import { IUser } from './elementos/Interfaces/interfaces';

interface AuthContextProps {
    token: string | null;
    setToken: (token: string | null) => void;
    userData: IUser | null;
    setUserData: (user: IUser | null) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [userData, setUserData] = useState<IUser | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        const storedUserData = localStorage.getItem('userData');

        if (storedToken) {
            setToken(storedToken);
        }
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem('userToken', token);
        } else {
            localStorage.removeItem('userToken');
        }
    }, [token]);

    useEffect(() => {
        if (userData) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            localStorage.removeItem('userData');
        }
    }, [userData]);

    return (
        <AuthContext.Provider value={{ token, setToken, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};




