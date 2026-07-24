import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline, text
  size = 'md', // sm, md, lg
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} {...props}>
      {Icon && <Icon className="btn-icon" size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
