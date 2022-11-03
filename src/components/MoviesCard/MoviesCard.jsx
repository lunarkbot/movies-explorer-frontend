import './MoviesCard.css';
import {IMAGES_URL} from '../../constants';
import {useState} from 'react';
import {mainApi} from '../../utils/MainApi';

export const MoviesCard = ({ card, isSavedMovies = false, isSaved, handleRemove }) => {
  console.log(card)

  const [isSavedCard, setIsSavedCard] = useState(isSaved)
  console.log(typeof  card.movieId)
  function handleClick(e) {
    if (isSavedMovies || isSavedCard) {
      const id = card.id || card.movieId;
      mainApi.deleteMovie(id)
        .then((card) => {
          if (isSavedMovies) {
            handleRemove(id);
          } else {
            setIsSavedCard(false);
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      mainApi.addMovie({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: IMAGES_URL + card.image.url,
        trailerLink: card.trailerLink,
        thumbnail: IMAGES_URL + card.image.formats.thumbnail.url,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        movieId: card.id,
      })
        .then((card) => {
          setIsSavedCard(true);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <li className="movies-card">
      <p className="movies-card__title">{ card.nameRU }</p>
      <time className="movies-card__duration">{ card.duration }</time>
      <div className="movies-card__ico-wrap">
        <button
          type="button"
          onClick={handleClick}
          className={`
            movies-card__ico
            ${isSavedMovies ? 'movies-card__ico-delete' 
                            : isSavedCard 
                            ? 'movies-card__ico-favorites movies-card__ico-favorites_saved'
                            : 'movies-card__ico-favorites'}
          `}
        ></button>
      </div>
      <img
        src={ isSavedMovies ? card.thumbnail : IMAGES_URL + card.image.formats.thumbnail.url }
        alt={ card.nameRU }
        className="movies-card__img"
      />
    </li>
  );
};
