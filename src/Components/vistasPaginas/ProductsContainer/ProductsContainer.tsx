import Image from 'next/image';
import { CategoryButton } from '@/Components/elementos/data/botones/catgoryButton'; 
import BannerShipping from '@/Components/elementos/products/bannerShipping';
import SearchBar from '@/Components/elementos/products/category/searchBar';

const ProductsContainer = () => {
    return (
        <div className='flex-col'>
            <div className='flex gap-4 bg-blue-500 rounded-md mx-auto h-24 w-11/12 lg:h-60 lg:w-11/12 mt-10 lg:mt-6 font-archivo font-bold justify-around'>
                <div className='text-white text-center mt-3 md:mt-3 lg:mt-3'>
                    <h2 className='text-red-400 ml-4 pt-1 lg:pt-7 lg:ml-10 text-sm lg:text-3xl uppercase'>New in!</h2>
                    <h2 className='sm:ml-4 lg:ml-10 sm:text-md lg:text-2xl'>Apple Watch</h2>
                    <h3 className='sm:text-sm sm:ml-4 lg:ml-10 text-xl lg:text-xl lg:mt-1'>Series 9</h3>
                    <div className='hidden lg:flex lg:justify-center ml-20 lg:ml-10'>
                        <CategoryButton categoryId={4} label="Search in this category" className='mt-4 bg-red-500 text-white lg:text-sm px-5 py-2 rounded hover:bg-white hover:text-red-500' />
                    </div>
                </div>
                <div className="text-white">
                    <h2 className="text-4xl sm:mt-6 sm:pt-1 sm:mr-8 lg:text-7xl xl:text-8xl uppercase opacity-40 mt-5 lg:mt-20">SMARTWATCH</h2>
                    <Image
                        src='/iwatch.png'
                        alt="I watch"
                        width={240}
                        height={384}
                        className="rotate-17 relative w-16 ml-36 bottom-16 lg:w-60 lg:h-90 lg:transform lg:right-80 lg:bottom-52 xl:bottom-56 lg:left-16 xl:left-20"
                    />
                </div>
            </div>
            <BannerShipping />
            <SearchBar />
        </div>
    );
};

export default ProductsContainer;

