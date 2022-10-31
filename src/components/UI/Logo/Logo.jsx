import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to={'/'} className="logo" title="Logo" />
  );
};

export default Logo;
