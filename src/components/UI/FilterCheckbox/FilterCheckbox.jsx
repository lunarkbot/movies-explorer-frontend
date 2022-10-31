import './FilterCheckbox.css';
import {useRef, useState} from 'react';

export const FilterCheckbox = ({ handler, name, checked, label }) => {
  const [isChecked, setIsChecked] = useState(checked);

  function handleChange(e) {
    setIsChecked(!isChecked);
    handler(e);
  }

  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={handleChange}
        className="filter-checkbox__source"
      />
      <span className={`filter-checkbox__custom ${isChecked && 'filter-checkbox__custom_active'}`}></span>
      <span className="filter-checkbox__label">{label}</span>
    </label>
  );
};
