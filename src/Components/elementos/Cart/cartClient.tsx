'use client';
import React, { useEffect } from 'react';
import DeleteButton from "@/Components/elementos/data/botones/trashButton";
import Button from "@/Components/elementos/data/botones/backtoProducts";
import { useCartLogic } from '@/Components/elementos/Cart/cartLogic'; 
import { useRouter } from 'next/navigation';
import { useAuth } from '@/Components/authContext';

interface CartContainerProps {
  userId: number;
  showButtons?: boolean;
}

const CartClient: React.FC<CartContainerProps> = ({ userId, showButtons = true }) => {
  const router = useRouter(); 
  const {cart, total, clearCart, updateTotal, removeFromCart, handleQuantityChange, confirmClearCart, HandleCheckout} = useCartLogic();
  const {token} = useAuth();
console.log('token', token);

  useEffect(()=>{
    if(!token){
      router.push('/User/login')
    }
  }, [])

  const handleCheckoutClick = () => {
    HandleCheckout(cart, clearCart, updateTotal);
    setTimeout(() => {
      router.push(`/User/${userId}/dashboard`);
    }, 2000);
  };
  return (
    <div>
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
                label="Ir al carrito -->"
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
            onClick={handleCheckoutClick}
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

export default CartClient;
