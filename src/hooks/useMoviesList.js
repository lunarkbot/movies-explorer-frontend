import {useState} from 'react';

export function useMoviesList() {
  const [dbIdList, setDbIdList] = useState({});
  const [idList, setIdList] = useState([]);


  function updateList(movies) {
    const list = [];
    const ids = {};

    movies.forEach((item) => {
      list.push(item.movieId);
      ids[item.movieId] = item._id;
    });

    setDbIdList({
      ...ids,
    });

    setIdList([
      ...list,
    ])
  }

  function getDbId(movieId) {
    return dbIdList[movieId];
  }

  return { idList, getDbId, updateList };
}
