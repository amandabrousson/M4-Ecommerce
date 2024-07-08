'use client'
import { useEffect, useState } from "react";
import { IProduct } from "../../Interfaces/interfaces";
import { getProducts } from "@/services/services";
import ListaProductos from "../../data/productosData";

interface ProductCategoryProps {
  categoryId: string;
}

const ProductByCategory: React.FC<ProductCategoryProps> = ({ categoryId }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProducts();
        const categoryIdNumber = parseInt(categoryId, 10);
        const filteredProducts = productList.filter(product => product.categoryId === categoryIdNumber);
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error al obtener los productos. Por favor, inténtalo de nuevo.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center text-red-500">No hay productos en esta categoría</div>;
  }

  return (
    <div>
      <ListaProductos data={products} />
    </div>
  );
};

export default ProductByCategory;


