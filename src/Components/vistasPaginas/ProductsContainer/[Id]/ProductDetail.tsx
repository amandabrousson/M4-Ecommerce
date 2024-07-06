'use client';
import { useEffect, useState } from 'react';
import Button from '@/Components/elementos/data/botones/backtoProducts';
import { getProducts } from '@/services/services';
import { IProduct } from '@/Components/elementos/Interfaces/interfaces';
import { useRouter } from 'next/navigation';
import Details from '@/Components/elementos/Cards/CardDetail/cardDetails';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [productos, setProductos] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProductos(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const product = productos.find(product => product.id.toString() === productId);

  if (!product) {
    return <div className="text-center text-red-500">Producto no encontrado</div>;
  }

  return (
    <div className='sm:p-10'>
      <Details {...product} />
      <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white justify-center items-center">
        <Button label=" <-- Volver a la página anterior" onClick={() => router.back()} className="underline underline-offset-4 btn" />
      </div>
    </div>
  );
};

export default ProductDetail;
