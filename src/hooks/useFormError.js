import {useState} from 'react';

export function useFormError() {
  const [error, setError] = useState('');

  function showError(message) {
    setError(message);
    setTimeout(function() {
      setError('')
    }, 4000);
  }

  return { error, showError };
}