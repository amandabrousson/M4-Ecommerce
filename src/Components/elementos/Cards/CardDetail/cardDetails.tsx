import Image from "next/image";
import { IProduct } from "../../Interfaces/interfaces";
import { useCart } from "../../Cart/cartContext";

interface DetailsProps extends IProduct { }

const Details: React.FC<DetailsProps> = ({ id, name, image, description, price, stock }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  const product = { id, name, image, price, stock };
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-md shadow-lg p-6 w-11/12 sm:w-full lg:w-11/12 mx-auto mt-6 text-center">
      <div className="flex flex-col md:flex-row lg:flex-row lg:space-x-10 justify-center md:items-top gap-6 sm:items-center">
        <div className="flex-1 flex justify-center items-center">
          <Image src={image} alt={name} width={400} height={400} className="object-contain" />
        </div>
        <div className="flex-1 mt-6 md:mt-0 lg:mt-0 lg:space-x-1 text-left bg-gray-200 p-8 rounded-md">
          <h2 className="text-black font-bold text-2xl lg:text-2xl xl:text-3xl underline-offset-8 underline mb-6 pt-4">{name}</h2>
          <p className="text-lg sm:text-2xl lg:text-xl lg:ml-2 font-bold">{formattedPrice}</p>
          <p className="text-md lg:text-lg">Stock: {stock}</p>
          <div className="flex mt-3">
            <button onClick={() => addToCart(product)} className="buttonFormat">Add to Cart</button>
          </div>
          <h2 className="uppercase underline mt-5 text-left font-bold">Characteristics</h2>
          <p className="pt-4 lg:pt-4 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;