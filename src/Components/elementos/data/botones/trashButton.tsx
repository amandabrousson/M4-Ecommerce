import Swal from 'sweetalert2';
import { IProduct } from '../../Interfaces/interfaces';

interface DeleteButtonProps {
  product: IProduct;
  onRemove: (product: IProduct) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ product, onRemove }) => {
  const handleRemoveClick = () => {
    Swal.fire({
      title: `¿Está seguro que desea eliminar el producto "${product.name}" del carrito?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onRemove(product);
        Swal.fire(
          '¡Eliminado!',
          `El producto "${product.name}" ha sido eliminado.`,
          'success'
        );
      }
    });
  };

  return (
    <button onClick={handleRemoveClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-x" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 7h16" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        <path d="M10 12l4 4m0 -4l-4 4" />
      </svg>
    </button>
  );
};

export default DeleteButton;
