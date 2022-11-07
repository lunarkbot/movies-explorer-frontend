import {useEffect} from 'react';

export function useCheckbox(searchAll, setSearchAll) {
  useEffect(() => {
    if (localStorage.getItem('checkbox')) {
      setSearchAll(Boolean(localStorage.getItem('checkbox')))
    }
  }, [setSearchAll]);

  useEffect(() => {
    if (searchAll) {
      localStorage.setItem('checkbox', 'true');
    } else {
      localStorage.removeItem('checkbox');
    }
  }, [searchAll]);
}