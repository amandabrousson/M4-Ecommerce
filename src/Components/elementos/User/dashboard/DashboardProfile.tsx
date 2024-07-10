'use client';
import { useAuth } from '@/Components/authContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const DashboardProfile = () => {
    const { userData } = useAuth();
    const router = useRouter();
    
    useEffect(() => {
        if (!userData) {
            router.push('/User/login');
        }
    }, [userData, router]);

    if (!userData) {
        return null; 
    }

    return (
        <div className="text-white bg-gray-800 flex flex-col justify-start h-4/5 w-4/5 border border-black p-4 rounded-lg xl:ml-10">
            <div className="flex">
                <div className="w-1/2 pr-4">
                    <div className="grid gap-4 ml-4">
                        <div className="flex flex-col">
                            <label className="text-white font-bold">Name:</label>
                            <p className="text-lg">{userData.name}</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-bold">Email:</label>
                            <p className="text-lg">{userData.email}</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-bold">Phone:</label>
                            <p className="text-lg">{userData.phone}</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-bold">Address:</label>
                            <p className="text-lg">{userData.address}</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <div className="flex justify-center items-center">
                        <Image src="/icono-user.jpg" alt="User Avatar" width={150} height={150} className="rounded-full hidden lg:block xl:block 2xl:block" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfile;
