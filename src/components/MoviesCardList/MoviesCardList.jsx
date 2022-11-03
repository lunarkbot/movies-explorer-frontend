import './MoviesCardList.css';
import {MoviesCard} from '../MoviesCard/MoviesCard';

export const MoviesCardList = ({ movies = [], isSavedMovies = false, idList = [] }) => {
  return (
    <ul className="movies-card-list">
        {movies.map((item, index) => {
          return <MoviesCard
            card={item}
            key={item.id}
            isSavedMovies={isSavedMovies}
            isSaved={idList.includes(item.id)}
          />;
      })}
    </ul>
  );
};
