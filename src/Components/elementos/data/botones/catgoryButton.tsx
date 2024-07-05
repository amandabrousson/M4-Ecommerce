'use client'
import { useRouter } from 'next/navigation';

interface CategoryButtonProps {
  categoryId: number;
  label: string;
  className?: string;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ categoryId, label, className }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/Products/Categories/${categoryId}`);
  };

  return (
    <button
      className={`mt-4 px-5 py-2 rounded hover:bg-white ${className}`}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};
