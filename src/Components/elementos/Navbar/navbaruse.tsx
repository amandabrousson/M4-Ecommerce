'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/Components/authContext';

export default function useNavbarFunctions() {
    const router = useRouter();
    const { token, setToken, userData } = useAuth();
    const [linkText, setLinkText] = useState('Log In');
    const pathname = usePathname();

    const handleLogout = () => {
        setToken(null);
        localStorage.clear();
        router.push("/User/login");
    };

    useEffect(() => {
        if (token && userData?.id) {
            setLinkText('My Account');
        } else {
            setLinkText('Log In');
        }
    }, [token, userData?.id]);

    return { token, userData, linkText, handleLogout, pathname };
}
