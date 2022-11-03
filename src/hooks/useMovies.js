import {useEffect, useState} from 'react';
import {useMedia} from './useMedia';

export function useMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [numOfMovies, setNumOfMovies] = useState(3);
  const [isMore, setIsMore] = useState(false);
  const { pageSize } = useMedia();

  useEffect(() => {
    if (pageSize.desktop) setNumOfMovies(3);
    else if (pageSize.tablet) setNumOfMovies(2);
    else if (pageSize.mobile) setNumOfMovies(1);
  }, [pageSize])

  useEffect(() => {
    setIsMore(count < allMovies.length);
  }, [setIsMore, count, allMovies]);

  function getFirst(data) {
    setCount(numOfMovies);
    setAllMovies([
      ...data
    ]);
    setMovies([
      ...data.slice(0, numOfMovies),
    ]);
  };

  function getNext() {
    setMovies([
      ...movies,
      ...allMovies.slice(count, count + numOfMovies)
    ]);
    setCount(count + numOfMovies);
  }

  return { movies, isMore, getFirst, getNext };
};
