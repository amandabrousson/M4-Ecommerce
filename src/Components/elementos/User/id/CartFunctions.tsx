import { clearCartOutside } from "@/Components/elementos/Cart/cartContext";
import { IProduct } from "../../Interfaces/interfaces";
import checkoutOrder from "../../data/botones/checkout";
import Swal from 'sweetalert2';

export const HandleCheckout = async (cart: IProduct[], clearCart: () => void, updateTotal: (total: number) => void) => {
  try {
    const productIds = cart.map((product) => product.id);
    console.log("Product IDs for checkout:", productIds);

    await checkoutOrder(productIds);

    Swal.fire({
      icon: 'success',
      title: 'Pedido realizado con éxito!',
      showConfirmButton: false,
      timer: 1500
    });

    clearCart();
    updateTotal(0);
    clearCartOutside();
  } catch (error) {
    console.error("Error durante el checkout:", error);
    if (error === "Token de usuario no encontrado") {
      Swal.fire({
        icon: 'error',
        title: 'Error durante el checkout',
        text: 'Usuario no autenticado. Por favor, inicie sesión para continuar.'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error durante el checkout',
        text: 'Por favor, inténtalo de nuevo más tarde.'
      });
    }
  }
};

export const handleRemoveProduct = (product: IProduct, removeFromCart: (product: IProduct) => void) => {
  Swal.fire({
    title: `¿Está seguro que desea eliminar el producto "${product.name}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      removeFromCart(product);
      Swal.fire({
        icon: 'success',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
};

