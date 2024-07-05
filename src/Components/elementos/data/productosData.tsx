import Card from '../Cards/Card';
import { IProduct } from '../Interfaces/interfaces';
import { useCart } from '../Cart/cartContext';

interface ListaProductosProps {
  data: IProduct[];
}

const ListaProductos: React.FC<ListaProductosProps> = ({ data }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex-col mx-auto ">
      <div className="mt-7 grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 mx-auto">
        {data.map((product) => (
          <div key={product.id}>
            <Card {...product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;


