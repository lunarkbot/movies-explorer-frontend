import {useEffect, useState} from 'react';
import {useMedia} from './useMedia';
import {
  DESKTOP_NUM_OF_ADDED_MOVIES,
  MOBILE_NUM_OF_ADDED_MOVIES,
  TABLET_NUM_OF_ADDED_MOVIES,
} from '../constants';

export function useMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [numOfMovies, setNumOfMovies] = useState(DESKTOP_NUM_OF_ADDED_MOVIES);
  const [isMore, setIsMore] = useState(false);
  const { pageSize } = useMedia();

  useEffect(() => {
    if (pageSize.desktop) setNumOfMovies(DESKTOP_NUM_OF_ADDED_MOVIES);
    else if (pageSize.tablet) setNumOfMovies(TABLET_NUM_OF_ADDED_MOVIES);
    else if (pageSize.mobile) setNumOfMovies(MOBILE_NUM_OF_ADDED_MOVIES);
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
