import './MoviesCardList.css';
import {MoviesCard} from '../MoviesCard/MoviesCard';

export const MoviesCardList = ({
                                 movies = [],
                                 isSavedMovies = false,
                                 idList,
                                 getDbId,
                                 handleRemove,
                              }) => {
  return (
    <ul className="movies-card-list">
        {movies.map((item, index) => {
          return <MoviesCard
            card={item}
            key={item.id || item.movieId}
            isSavedMovies={isSavedMovies}
            isSaved={idList.includes(item.id)}
            getDbId={getDbId}
            handleRemove={handleRemove}
          />;
      })}
    </ul>
  );
};
