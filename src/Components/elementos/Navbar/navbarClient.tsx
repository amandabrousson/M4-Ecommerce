'use client'
import Link from 'next/link';
import useNavbarFunctions from './navbaruse';
import { useAuth } from '@/Components/authContext';

const NavbarClient: React.FC = () => {
  const { token, userData } = useAuth();
  const { linkText, handleLogout, pathname } = useNavbarFunctions();

  return (
    <>
      <div className="text-white text-xl font-sans flex sm:flex sm:text-sm sm:ml-16 sm:mr-4 sm:space-x-9 sm:mt-8 md:text-lg md:flex md:items-center md:space-x-10 md:ml-4 lg:text-lg lg:ml-10 xl:text-xl xl:ml-20 lg:space-x-16 xl:space-x-28 md:mt-0 2xl:text-2xl 2xl:space-x-40">
        <Link href='/' className={`hover:underline ${pathname === '/' ? 'underline' : ''} md:ml-8 lg:ml-16`}>
          Home
        </Link>
        <Link href='/Products' className={`hover:underline ${pathname === '/Products' ? 'underline' : ''}`}>
          Products
        </Link>
        <Link href={token ? `/User/${userData?.id}/dashboard` : '/User/login'} passHref className={`hover:underline ${pathname === '/User' ? 'underline' : ''}`}>
          {token ? 'My Account' : linkText}
        </Link>
        <Link href='/Contacto' className={`hover:underline ${pathname === '/Contacto' ? 'underline' : ''}`}>
          Contact
        </Link>
        {token && (
          <button type='button' onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:h-10 rounded bg-opacity-60 sm:absolute sm:right-6 sm:top-6 md:absolute md:h-12 md:mt-6 lg:absolute lg:mt-8 lg:right-28 2xl:absolute 2xl:right-50">Log Out</button>
        )}
      </div>
      {token && (
        <div className="hidden lg:block xl:block 2xl:block absolute top-2 right-2 lg:top-4 lg:right-4 xl:top-4 xl:right-4 2xl:top-4 2xl:right-10">
          <Link href={`/User/${userData?.id}/cart`} >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </Link>
        </div>
      )}</>
  );
};

export default NavbarClient;

