import './MoviesCard.css';
import {IMAGES_URL} from '../../constants';

export const MoviesCard = ({ card, isSavedMovies = false, isSaved }) => {
  console.log(card)
  return (
    <li className="movies-card">
      <p className="movies-card__title">{ card.nameRU }</p>
      <time className="movies-card__duration">{ card.duration }</time>
      <div className="movies-card__ico-wrap">
        <button
          type="button"
          className={`
            movies-card__ico
            ${isSavedMovies ? 'movies-card__ico-delete' 
                            : isSaved 
                            ? 'movies-card__ico-favorites movies-card__ico-favorites_saved'
                            : 'movies-card__ico-favorites'}
          `}
        ></button>
      </div>
      <img
        src={ IMAGES_URL + card.image.formats.thumbnail.url }
        alt={ card.nameRU }
        className="movies-card__img"
      />
    </li>
  );
};
