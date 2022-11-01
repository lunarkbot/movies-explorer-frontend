import './MyInput.css';
import {useState} from 'react';

export const MyInput = ({
                        type = 'text',
                        name,
                        placeholder,
                        value = '',
                        hasError = false,
                        errorText = '',
                      }) => {

  const [inputValue, setInputValue] = useState(value);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <label className="my-input">
      <span className="my-input__label">{placeholder}</span>
      <input
        type={type}
        name={name}
        onInput={handleInput}
        value={inputValue}
        className={`my-input__input ${hasError && 'my-input__input_has-error'}`}
      />
      {hasError && <span className="my-input__error">{errorText}</span>}
    </label>
  );
};
