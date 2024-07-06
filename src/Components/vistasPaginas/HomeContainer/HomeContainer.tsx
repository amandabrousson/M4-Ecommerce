import '@/app/globals.css';
import Image from 'next/image';
import { CategoryButton } from '@/Components/elementos/data/botones/catgoryButton'; 

const HomeContainer = () => {
    return (
        <div>
            <div className='flex flex-col items-center sm:mt-8 lg:flex-row lg:justify-center lg:ml-20 xl:justify-center xl:items-center 2xl:items-center'>
                <div className='lg:mt-0 lg:flex-1 xl:justify-center xl:ml-40'>
                    <Image
                        src='/auris.png'
                        alt="auriculares beats"
                        className='hover:scale-110 w-80 h-80 lg:w-[40rem] lg:h-[30rem]'
                        width={320}
                        height={320}
                        quality={100}
                        unoptimized
                    />
                </div>
                <div className='sm:mt-6 sm:items-center sm:text-center xl:mt-20 lg:mt-0 lg:flex-1 lg:flex lg:flex-col lg:items-center lg:justify-center xl:justify-center xl:items-center xl:mr-60'>
                    <h3 className='text-white sm:text-3xl'>Beats Studio 2.0</h3>
                    <Image
                        src='/drdre.png'
                        alt="Logo beats"
                        width={320}
                        height={160}
                        className='sm:w-80 sm:h-40 sm:bottom-16 relative lg:w-[20rem] lg:h-[10rem] lg:bottom-16'
                        quality={100}
                        unoptimized
                    />
                    <h3 className='text-xl text-gray-500 sm:bottom-24 relative mt-2 lg:mt-0 mr-5 lg:bottom-20 lg: left-2'>USD 150.00</h3>
                    <div className="sm:ml-11 sm:bottom-20 relative flex space-x-4 lg:relative lg:bottom-20 lg:right-4">
                        <CategoryButton categoryId={5} label="Search in this category" className="bg-gray-500 text-white lg:text-md px-5 py-5 hover:text-black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
