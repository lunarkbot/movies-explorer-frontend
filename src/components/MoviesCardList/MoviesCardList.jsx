import './MoviesCardList.css';
import {MoviesCard} from '../MoviesCard/MoviesCard';

export const MoviesCardList = ({ movies = [], isSavedMovies = false }) => {
  return (
    <ul className="movies-card-list">
      {movies.map((item, index) => {
        return <MoviesCard card={item} key={item.id} isSavedMovies={isSavedMovies} isSaved={false} />;
      })}
    </ul>
  );
};
