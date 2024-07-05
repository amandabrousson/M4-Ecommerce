'use client';
import { useState } from 'react';
import DashboardProfile from '@/Components/elementos/User/dashboard/DashboardProfile';
import CartContainer from '@/Components/vistasPaginas/UserContainer/[Id]/CartCon/CartContainer';
import OrdersHistory from '../../../../elementos/Cart/orderHistory';

interface DashboardProps {
  userId: number;
}

const DashboardCart: React.FC<DashboardProps> = ({ userId }) => {
  const [selectedOption, setSelectedOption] = useState<'profile' | 'cart' | 'history'>('profile');

  const handleOptionChange = (option: 'profile' | 'cart' | 'history') => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-row mt-8 sm:space-x-4 xl:space-x-8">
      <div className="bg-gray-200 w-3/12 h-8/12 p-4 ml-4 rounded-lg flex flex-col justify-start items-center">
        <h2 className="text-xl font-semibold mb-4 sm:text-sm sm:mt-2 xl:text-xl">Dashboard Menu</h2>
        <ul className="space-y-2 w-full sm:text-sm sm:flex sm:flex-col sm:items-center sm:space-y-6 xl:text-xl xl:mt-4">
          <li>
            <button
              className={`w-full py-2 px-4 rounded-lg text-center hover:bg-gray-300 focus:outline-none ${selectedOption === 'profile' ? 'bg-gray-300 font-semibold' : ''
                }`}
              onClick={() => handleOptionChange('profile')}
            >
              Perfil
            </button>
          </li>
          <li>
            <button
              className={`w-full py-2 px-4 rounded-lg text-center hover:bg-gray-300 focus:outline-none ${selectedOption === 'cart' ? 'bg-gray-300 font-semibold' : ''
                }`}
              onClick={() => handleOptionChange('cart')}
            >
              Tu Carrito
            </button>
          </li>
          <li>
            <button
              className={`w-full py-2 px-4 rounded-lg text-center hover:bg-gray-300 focus:outline-none ${selectedOption === 'history' ? 'bg-gray-300 font-semibold' : ''
                }`}
              onClick={() => handleOptionChange('history')}
            >
              Historial de Compras
            </button>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center h-8/12 w-3/5">
        {selectedOption === 'profile' && (
          <div className="bg-gray-300 text-black rounded-lg w-full h-full">
            <h1 className="text-3xl font-bold mb-6 text-center  xl:mt-4">Perfil</h1>
            <div className='sm:w-full sm:ml-9 sm:mb-4'>
            <DashboardProfile />
            </div>
          </div>
        )}
        {selectedOption === 'cart' && (
          <div className="bg-gray-300 text-black p-4 rounded-lg w-full h-full">
            <CartContainer userId={userId} showButtons={false} />
          </div>
        )}
        {selectedOption === 'history' && (
          <div className="bg-gray-300 text-black p-4 rounded-lg w-full h-full">
            <h1 className="text-3xl font-bold mb-6 text-center xl:mt-4">Historial de Compras</h1>
            <OrdersHistory />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCart;
