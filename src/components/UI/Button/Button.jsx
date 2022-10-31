import React from 'react';
import './Button.css';

const Button = ({
                  className = '',
                  onClick,
                  children,
                  type = 'button'
                }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
