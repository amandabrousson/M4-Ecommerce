import Image from "next/image";
import '../../../app/globals.css';
import { IProduct } from "../Interfaces/interfaces";
import Link from "next/link";

interface CardProps extends IProduct {
  addToCart: (product: IProduct) => void;
}

export const Card: React.FC<CardProps> = ({ id, name, image, price, addToCart }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  const product = { id, name, image, price };

  return (
    <div className="card flex sm:justify-center sm:items-center sm:w-80 sm:ml-18">
      <h2 className="sm:text-sm">{name}</h2>
      <Image className="sm:mt-4" src={image} alt={name} width={300} height={200} />
      <p>{formattedPrice}</p>
      <div className="flex justify-center items-center mt-3 space-x-2">
        <button className="px-2 py-1 text-sm sm:h-14 sm:w-26 bg-blue-500 text-white rounded" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <Link href={`/Products/${id}`}>
          <button className="px-2 py-1 text-sm sm:h-14 bg-green-500 text-white rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
