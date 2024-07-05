'use client';
import React from 'react';
import DeleteButton from "@/Components/elementos/data/botones/trashButton";
import Button from "@/Components/elementos/data/botones/backtoProducts";
import { useCartLogic } from '@/Components/elementos/Cart/cartLogic'; 

interface CartContainerProps {
  userId: number;
  showButtons?: boolean;
}

const CartContainer: React.FC<CartContainerProps> = ({ userId, showButtons = true }) => {
  const {cart, total, clearCart, updateTotal, removeFromCart, handleQuantityChange, confirmClearCart, HandleCheckout} = useCartLogic();

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg sm:m-6 md:m-10 xl:m-20 lg:m-10">
      <h1 className="text-3xl text-center mb-8">Carrito</h1>
      {cart.length > 0 && (
        <div className="flex flex-col items-center">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center mb-4">
              <div className="flex items-center">
                <input
                  type="number"
                  className="bg-gray-600 text-white px-2 py-1 rounded mr-4 font-bold w-16 text-center"
                  value={product.quantity || 1}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                  min="1"
                />
                <p className="text-white">
                  {product.name} - {product.quantity ? `${product.quantity} x ` : ''}${product.price}
                </p>
              </div>
              <div className="ml-6">
                <DeleteButton product={product} onRemove={removeFromCart} />
              </div>
            </div>
          ))}

          <div className="mb-4">
            <p className="text-lg font-semibold">Total:</p>
            <p>${total}</p>
          </div>
          {!showButtons && (
            <div className="mt-4">
              <Button
                label="Ir al carrito"
                href={`/User/${userId}/cart`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              />
            </div>
          )}
        </div>
      )}
      {cart.length > 0 && showButtons && (
        <div className="flex space-x-4 mt-4 justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => HandleCheckout(cart, clearCart, updateTotal)}
          >
            Realizar Pedido
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={confirmClearCart}>
            Eliminar carrito
          </button>
        </div>
      )}
      {cart.length === 0 && <p className="text-center text-gray-400">¡El carrito está vacío!</p>}
    </div>
  );
};

export default CartContainer;
