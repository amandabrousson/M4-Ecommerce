'use client';
import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { IProduct } from "../Interfaces/interfaces";
import { useAuth } from "@/Components/authContext";
import Swal from "sweetalert2";

interface CartContextProps {
    cart: IProduct[];
    total: number;
    addToCart: (product: IProduct) => void;
    clearCart: () => void;
    removeFromCart: (product: IProduct) => void;
    updateTotal: (newTotal: number) => void;
    updateQuantity: (product: IProduct, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);
    const { token } = useAuth();

    const addToCart = (product: IProduct) => {
        if (!token) {
            Swal.fire({
                icon: 'error',
                text: 'You need to be logged in to add products to the cart.'
            });
            return;
        }
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            );
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            updateTotal(updatedCart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0));
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            updateTotal(total + product.price);
        }
        console.log(`Product ${product.name} (ID: ${product.id}) added to cart.`);
        Swal.fire({
            icon: 'success',
            text: `${product.name} has been added to the cart!`
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
        updateTotal(0);
    };

    const removeFromCart = (product: IProduct) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateTotal(updatedCart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0));
    };

    const updateQuantity = (product: IProduct, quantity: number) => {
        const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateTotal(updatedCart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0));
    };

    const updateTotal = (newTotal: number) => {
        setTotal(newTotal);
    };

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            const parsedCart: IProduct[] = JSON.parse(storedCart).map((product: IProduct) => ({
                ...product,
                quantity: product.quantity || 1
            }));
            const initialTotal = parsedCart.reduce((tot, product) => tot + product.price * (product.quantity || 1), 0);
            setCart(parsedCart);
            setTotal(initialTotal);
        }
    }, []);

    return (
        <CartContext.Provider value={{ cart, total, addToCart, clearCart, updateTotal, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

