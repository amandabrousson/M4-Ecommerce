import ProductByCategory from '@/Components/elementos/products/category/byCategory';
import categoryNames from '@/Components/elementos/products/category/categoryNames';
import Button from '@/Components/elementos/data/botones/backtoProducts';

interface CategoryPageProps {
  categoryId: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId }) => {
  const categoryName = categoryNames[categoryId] || 'Categoría Desconocida';

  return (
    <div className='relative text-white mt-4'>
      <div className='flex flex-col justify-center items-center bg-blue-500 h-20 w-11/12 mx-auto rounded-md lg:flex-row lg:h-40 lg:w-200 lg:mt-4 lg:mb-10 xl:mt-2'>
        <h2 className=' text-white sm:text-5xl sm:mr-48 text-4xl uppercase opacity-40 font-archivo font-bold lg:text-7xl lg:ml-10 xl:ml-40'>
          {categoryName}
        </h2>
      </div>
      <div className="card-container">
        <ProductByCategory categoryId={categoryId} />
      </div>
      <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white justify-center items-center underline underline-offset-2">
        <Button label="<-- Back to Categories" href="/Products" className="btn" />
      </div>
    </div>
  );
};

export default CategoryPage;


