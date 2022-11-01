import './MyInput.css';
import {useState} from 'react';

export const MyInput = ({
                        type = 'text',
                        name,
                        placeholder,
                        value = '',
                        handler,
                        min,
                        max,
                        required = true,
                        errorText = '',
                      }) => {

  return (
    <label className="my-input">
      <span className="my-input__label">{placeholder}</span>
      <input
        type={type}
        name={name}
        onInput={handler}
        value={value}
        minLength={min}
        maxLength={max}
        required={required}
        className={`my-input__input ${errorText && 'my-input__input_has-error'}`}
      />
      {errorText && <span className="my-input__error">{errorText}</span>}
    </label>
  );
};
