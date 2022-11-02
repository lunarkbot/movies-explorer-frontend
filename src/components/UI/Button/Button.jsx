import React from 'react';
import './Button.css';

const Button = ({
                  className = '',
                  onClick,
                  children,
                  type = 'button',
                  disabled
                }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
