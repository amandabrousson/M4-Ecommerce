import React from 'react';
import CartClient from '@/Components/elementos/Cart/cartClient';

interface CartContainerProps {
  userId: number;
  showButtons?: boolean;
}

const CartContainer: React.FC<CartContainerProps> = ({ userId, showButtons = true }) => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg sm:m-6 md:m-10 xl:m-20 lg:m-10">
      <h1 className="text-3xl text-center mb-8">Carrito</h1>
      <CartClient userId={userId} showButtons={showButtons} />
    </div>
  );
};

export default CartContainer;
