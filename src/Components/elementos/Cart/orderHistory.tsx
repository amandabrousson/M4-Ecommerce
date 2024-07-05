import { useEffect, useState } from "react";
import { IProduct } from "../Interfaces/interfaces";
import { getUserOrders } from "@/services/services";
import { useAuth } from '@/Components/authContext';

const OrdersHistory: React.FC = () => {
    const { userData, token } = useAuth();
    const [userOrders, setUserOrders] = useState<{ id: number; status: string; date: string; products: IProduct[] }[]>([]);
    const [total, setTotal] = useState<number[]>([]);

    useEffect(() => {
        const fetchUserOrders = async () => {
            try {
                if (!userData) {
                    console.error('No se encontraron datos del usuario en el contexto');
                    return;
                }

                if (!token) {
                    console.error('Token de autorización no encontrado en el almacenamiento local');
                    return;
                }

                const orders = await getUserOrders(userData.id, token);
                setUserOrders(orders);

                const orderTotals = orders.map(order => {
                    const productsTotal = order.products.reduce((sum, product) => sum + product.price, 0);
                    return productsTotal;
                });

                setTotal(orderTotals);

            } catch (error) {
                console.error('Error al obtener los pedidos del usuario:', error);
            }
        };

        if (userData && token) {
            fetchUserOrders();
        }

    }, [userData, token]);

    const formatDate = (dateString: string) => {
        if (typeof dateString !== 'string') {
            console.error('Invalid date string');
            return '';
        }
        const date = new Date(dateString);
        return date.toISOString().slice(0, 19).replace('T', 'Time ');
    };

    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg">
            <div className="flex flex-col items-center">
                {userOrders.length > 0 ? (
                    <div className="mb-4">
                        <ul>
                            {userOrders.map((order, orderIndex) => (
                                <li key={orderIndex} className="flex text-center items-center sm:text-sm sm:ml-2 sm:mb-6 xl:text-lg">
                                    <div className="mr-4">
                                        <p>Id: {order.id}</p>
                                    </div>
                                    <div className="mr-4">
                                        <p>Status: {order.status}</p>
                                    </div>
                                    <div className="mr-4">
                                        <p>Date: {formatDate(order.date)}</p>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <p className="text-lg font-semibold mr-2">Total:</p>
                                        <p>${total[orderIndex]}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No tienes órdenes recientes.</p>
                )}
            </div>
        </div>
    );
};

export default OrdersHistory;
