import './FilterCheckbox.css';
import {useRef, useState} from 'react';

export const FilterCheckbox = ({ handler, name, checked, label }) => {
  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handler}
        className="filter-checkbox__source"
      />
      <span className={`filter-checkbox__custom ${checked && 'filter-checkbox__custom_active'}`}></span>
      <span className="filter-checkbox__label">{label}</span>
    </label>
  );
};
