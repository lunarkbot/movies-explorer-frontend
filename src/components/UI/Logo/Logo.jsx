import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.css';

const Logo = ({ secondClass = '' }) => {
  return (
    <Link to={'/'} className={`logo ${secondClass}`} title="Logo" />
  );
};

export default Logo;
