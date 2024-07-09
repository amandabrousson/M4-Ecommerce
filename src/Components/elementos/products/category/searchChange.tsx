'use client'
import { useState, useEffect } from 'react';
import { getProducts } from '@/services/services';
import { IProduct } from '../../Interfaces/interfaces';
import ListaProductos from '../../data/productosData';

interface SearchChangeProps {
  onSearch: (searchTerm: string) => void;
  onClearSearch: () => void;
}

const SearchChange: React.FC<SearchChangeProps> = ({ onSearch, onClearSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.length !== 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      onSearch(searchTerm);
      setSearchPerformed(true);
    } else {
      setFilteredProducts([]);
      onClearSearch();
      setSearchPerformed(false);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredProducts([]);
    onClearSearch();
    setSearchPerformed(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='w-3/4  sm:mt-8 xl:mt-2'>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search products by name"
          className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none h-10 pr-16"
        />
        <button type="submit" className="search-button ml-2 p-2 bg-blue-500 text-white rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
        <button type="button" onClick={handleClearSearch} className="clear-button ml-2 p-2 bg-red-500 text-white rounded-md">
          Clear
        </button>
      </form>

      {searchPerformed && filteredProducts.length === 0 && (
        <p className="text-center mt-8 text-red-600">Product not found</p>
      )}

      {filteredProducts.length > 0 && (
        <ListaProductos data={filteredProducts} />
      )}

    </div>
  );
};
export default SearchChange;
