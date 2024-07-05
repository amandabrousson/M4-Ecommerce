'use client';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, href, onClick, className }) => {
  if (href) {
    return (
      <Link href={href} >
        {label}
      </Link>
    );
  }

  return (
    <div className='text-white'>
      <button onClick={onClick} className={`btn ${className}`}>
        {label}
      </button>
    </div>
  );
};

export default Button;
