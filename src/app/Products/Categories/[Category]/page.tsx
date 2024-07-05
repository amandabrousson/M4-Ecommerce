import CategoryPage from "@/Components/vistasPaginas/ProductsContainer/Categories/Category/Category";

const Category = ({ params } : {params : { Category : string }}) => {  

  const { Category: categoryId } = params;

  return <CategoryPage categoryId={categoryId} />;
}

export default Category;
