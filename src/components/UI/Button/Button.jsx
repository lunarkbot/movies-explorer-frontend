import React from 'react';
import './Button.css';

const Button = ({
                  className = '',
                  onClick,
                  children
                }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
