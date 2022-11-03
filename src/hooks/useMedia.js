import { useEffect, useState } from 'react';

export function useMedia() {
  const [pageSize, setPageSize] = useState({
    desktop: false,
    tablet: false,
    mobile: false,
  });

  useEffect(() => {
    function handleMedia() {
      setPageSize({
        desktop: window.matchMedia('(min-width: 1280px)').matches,
        tablet: window.matchMedia('(max-width: 1279px) and (min-width: 768px)').matches,
        mobile: window.matchMedia('(max-width: 767px)').matches,
      })
    }

    handleMedia();

    window.addEventListener('resize', handleMedia);

    return () => {
      window.removeEventListener('resize', handleMedia);
    }
  }, [])

  return { pageSize };
}
