import { IProduct } from "@/Components/elementos/Interfaces/interfaces";
import { LoginForm, RegisterForm } from "@/Components/elementos/Interfaces/LoginReg";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await fetch(`${API_URL}/products/`, {
            method: 'GET',
            next: { revalidate: 3600 }
        });
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        const data = await response.json();
        return data as IProduct[];
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching products: ${error.message}`);
        } else {
            throw new Error('Error fetching products');
        }
    }
};

// getUserOrders function
export const getUserOrders = async (userId: number, token: string): Promise<{ id: number, status: string; date: string; products: IProduct[]; }[]> => {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            headers: {
                'authorization': `${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching user orders');
        }
        const data = await response.json();
        return data as { id: number, status: string; date: string; products: IProduct[]; }[];
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user orders: ${error.message}`);
        } else {
            throw new Error('Error fetching user orders');
        }
    }
};

// Register 
export const registerUser = async (userData: RegisterForm) => {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error('Error during registration');
        }
    } catch (error) {
        throw error;
    }
};

//Login
export const loginUser = async (userData: LoginForm) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            return response.json();
        } else if (response.status === 400) {
            const errorResponse = await response.json();
            if (errorResponse.message === 'User does not exist') {
                throw new Error('User not found');
            } else if (errorResponse.message === 'Invalid password') {
                throw new Error('Invalid password');
            } else {
                throw new Error('Error during login');
            }
        } else {
            throw new Error('Error during login');
        }
    } catch (error) {
        throw error;
    }
};

export const postOrder = async (orderData: { products: number[] }, token: string): Promise<void> => {
    try {
        const headers = {
            "Authorization": `${token}`,
            "Content-Type": "application/json"
        };

        const response = await fetch(`${API_URL}/orders`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error("Error en la respuesta del servidor:", errorResponse);
            throw new Error("Fallo al guardar el pedido");
        }

        const data = await response.json();
        console.log("Respuesta del pedido:", data);

    } catch (error) {
        console.error("Error guardando el pedido:", error);
        throw error;
    }
};




