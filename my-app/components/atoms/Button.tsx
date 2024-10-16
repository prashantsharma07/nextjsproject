
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={`py-2 px-4 bg-blue-600 text-white rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
                