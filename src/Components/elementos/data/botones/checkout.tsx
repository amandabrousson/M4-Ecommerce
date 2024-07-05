import { postOrder } from "@/services/services"; 

const checkoutOrder = async (productIds: number[]): Promise<void> => {
    try {
        const token = localStorage.getItem('userToken');
        if (!token) {
            throw new Error("Token de usuario no encontrado");
        }

        await postOrder({ products: productIds }, token);
        console.log("Pedido guardado exitosamente.");

    } catch (error) {
        console.error("Error guardando el pedido:", error);
        throw error;
    }
};

export default checkoutOrder;
