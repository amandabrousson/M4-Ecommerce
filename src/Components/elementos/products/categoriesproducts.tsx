import Link from "next/link";
import Image from "next/image";

const CategoriesProducts = () => {
    return (
        <div className='text-white mt-8 xl:h-60 xl:w-11/12 mx-auto'>
            <div className='lg:flex xl:flex xl:gap-4 sm:grid sm:gap-4 sm:grid-cols-2 sm:ml-6 sm:mr-6 md:ml-8 md:mr-8'>
                <Link href="/Products/Categories/1" className='col-span-2 bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center w-full lg:w-1/3 relative'>
                    <Image src='/ihone14.png' alt='Imagen de smartphones' width={160} height={100} className='w-40 h-25' />
                    <h2 className='text-4xl font-semibold absolute uppercase opacity-60'>Smartphones</h2>
                </Link>
                <Link href="/Products/Categories/2" className='flex bg-red-500 text-white p-8 rounded-lg justify-center items-center w-full lg:w-1/3 relative'>
                    <h2 className='text-5xl font-semibold uppercase opacity-60 absolute'>Notebooks</h2>
                    <Image src='/notebook.png' alt='Imagen de notebook' width={260} height={160} className='w-35 h-40' />
                </Link>
                <Link href="/Products/Categories/3" className='bg-green-500 text-white p-4 rounded-lg flex justify-center items-center lg:w-1/3 relative'>
                    <Image src='/ipad.png' alt='Imagen de tablet' width={160} height={100} className='w-40 h-25 ' />
                    <h2 className='text-5xl font-semibold uppercase opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Tablets</h2>
                </Link>
            </div>
            <div className='lg:flex xl:flex xl:gap-4 sm:grid sm:gap-4 sm:grid-cols-2 sm:mt-4 sm:ml-6 sm:mr-6 md:ml-8 md:mr-8'>
                <Link href="/Products/Categories/4" className='bg-red-500 text-white p-10 rounded-lg flex justify-center items-center w-full lg:w-1/3 relative'>
                    <Image src='/smartwatch.png' alt='Imagen de smartwatch' width={120} height={100} className='w-30 h-25' />
                    <h2 className='text-4xl font-semibold uppercase opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Smartwatch</h2>
                </Link>
                <Link href="/Products/Categories/5" className='bg-green-500 text-white p-8 rounded-lg flex justify-center items-center w-full lg:w-1/3 relative'>
                    <h2 className='text-4xl font-semibold uppercase opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Headphones</h2>
                    <Image src='/aurisjbl.png' alt='Imagen de headphones' width={160} height={160} className='w-40 h-40' />
                </Link>
                <Link href="/Products/Categories/6" className='col-span-2 bg-blue-500 text-white rounded-lg flex justify-center items-center w-full lg:w-1/3 relative'>
                    <Image src='/accesories.png' alt='Imagen de accessories' width={260} height={160} className='w-50 h-40' />
                    <h2 className='text-4xl font-semibold uppercase opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Accessories</h2>
                </Link>
            </div>
        </div>
    )
}

export default CategoriesProducts;
