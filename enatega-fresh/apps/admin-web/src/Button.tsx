import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-white hover:bg-primary-dark';
      case 'secondary':
        return 'bg-secondary text-white hover:opacity-90';
      case 'outline':
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-white';
      case 'text':
        return 'text-primary hover:opacity-70';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-2.5 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return '';
    }
  };

  const baseStyles = `
    font-semibold rounded-lg cursor-pointer transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${fullWidth ? 'w-full' : ''}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
