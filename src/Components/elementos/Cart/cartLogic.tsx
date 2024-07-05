import { useCart, clearCartOutside } from "@/Components/elementos/Cart/cartContext";
import { HandleCheckout } from "@/Components/elementos/User/id/CartFunctions";
import Swal from 'sweetalert2';
import { IProduct } from "@/Components/elementos/Interfaces/interfaces"; 

interface CartActions {
  cart: IProduct[]; 
  total: number;
  clearCart: () => void;
  updateTotal: (newTotal: number) => void;
  removeFromCart: (product: IProduct) => void;
  updateQuantity: (product: IProduct, quantity: number) => void;
}

export const useCartLogic = () => {
  const { cart, total, clearCart, updateTotal, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    const productToUpdate = cart.find(product => product.id === productId);
    if (productToUpdate) {
      updateQuantity(productToUpdate, quantity);
    }
  };

  const confirmClearCart = () => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        updateTotal(0);
        clearCartOutside();
        Swal.fire(
          'Carrito eliminado',
          'El carrito ha sido eliminado correctamente.',
          'success'
        );
      }
    });
  };

  return {
    cart,
    total,
    clearCart,
    updateTotal,
    removeFromCart,
    updateQuantity,
    handleQuantityChange,
    confirmClearCart,
    HandleCheckout
  };
};
