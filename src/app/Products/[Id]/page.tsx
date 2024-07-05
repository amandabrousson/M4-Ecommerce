import ProductDetail from "@/Components/vistasPaginas/ProductsContainer/[Id]/ProductDetail";

const Product = ({ params }: { params: { Id: string } }) => {
  const { Id: productId } = params;
  return <ProductDetail productId={productId} />;
};

export default Product;
