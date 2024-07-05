import Image from 'next/image';
import NavbarClient from './navbarClient';

const Navbar: React.FC = () => {
    return (
        <nav className='flex '>
            <div className='flex items-start justify-start md:justify-start relative'>
                <Image
                    src='/2.png'
                    alt="Fondo navbar"
                    className='sm:inline-flex sm:mt-1 sm:ml-8 sm:w-20 sm:h-20 md:inline md:w-36 md:h-36 md:ml-4 lg:w-50 lg:h-58 lg:ml-8 lg:mt-4 transform rotate-17 lg:rotate-45 opacity-40'
                    width={50}
                    height={58}
                    unoptimized
                />
                <h1 className='text-white font-sans sm:text-2xl sm:absolute sm:mt-6 sm:ml-4 md:text-3xl md:absolute md:mt-12 md:pt-1 md:top-0 md:left-2 lg:text-4xl lg:left-13 lg:mt-15 lg:pt-3'>NexusTech</h1>
            </div>
            <NavbarClient />
        </nav>
    );
}

export default Navbar;
