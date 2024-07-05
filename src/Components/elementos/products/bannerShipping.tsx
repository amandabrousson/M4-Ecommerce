import Image from "next/image";

const BannerShipping = () => {
    return (
        <div className='flex bg-blue-500 h-12 sm:w-11/12 sm:h-16 sm:mt-4 sm:justify-around sm:space-x-2 sm:ml-7 lg:h-24 w-11/12 lg:mx-auto rounded-md mt-10 md:ml-8 space-x-10 lg:space-x-20 lg:justify-center text-center lg:pt-1 xl:justify-around xl:space-x-20'>
            <div>
                <Image
                    src='/correo.png'
                    alt="Shipping"
                    width={40}
                    height={30}
                    className="sm:w-10 sm:h-8 sm:ml-8 sm:mt-2 w-10 lg:w-14 lg:h-12 flex mt-1"
                    quality={100}
                    unoptimized
                />
                <p className='font-bold text-center ml-12 sm:ml-2 sm:mt-0 lg:ml-4 lg:mt-1 text-xs lg:text-sm'>Free Shipping</p>
            </div>
            <div>
                <Image
                    src='/asistencia.png'
                    alt="asistencia"
                    width={30}
                    height={30}
                    className="sm:w-8 sm:h-8 sm:ml-13 sm:mt-2 w-8 lg:w-10 lg:h-10 flex ml-12 lg:mt-3"
                />
                <p className='font-bold text-center sm:mt-0 sm:mr-4 ml-8 lg:ml-4 lg:mt-1 text-xs lg:text-sm'>Online support</p>
            </div>
            <div>
                <Image
                    src='/compraseg.png'
                    alt="compra"
                    width={30}
                    height={30}
                    className="sm:w-8 sm:h-8 sm:ml-14 sm:mt-2 lg:w-10 lg:h-10 w-10 flex ml-12 mt-1"
                    unoptimized
                />
                <p className='font-bold text-center sm:mt-0 sm:ml-4 ml-14 lg:ml-4 lg:mt-1 text-xs lg:text-sm'>Secure shipping</p>
            </div>
            <div>
                <Image
                    src='/devolucion.png'
                    alt="devolucion"
                    width={30}
                    height={30}
                    className="sm:w-8 sm:h-8 sm:ml-9 sm:mt-2 w-10 lg:w-10 lg:h-10 flex ml-8 mt-1"
                    unoptimized
                />
                <p className='font-bold text-center sm:ml-2 sm:mt-0 ml-6 lg:ml-4 lg:mt-1 text-xs lg:text-sm'>Guarantee</p>
            </div>
        </div>
    )
}

export default BannerShipping;
