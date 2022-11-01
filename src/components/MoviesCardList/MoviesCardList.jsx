import './MoviesCardList.css';
import {MoviesCard} from '../MoviesCard/MoviesCard';
import cardImg from '../../images/card.jpg';
import cardImgOne from '../../images/card1.jpg';
import cardImgTwo from '../../images/card2.jpg';

export const MoviesCardList = ({ isSavedMovies = false }) => {
  const demoCard = [];
  const cardImgs = [cardImg, cardImgOne, cardImgTwo];

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  for (let i = 0; i < 11; i++) {
    demoCard.push({
      nameRU: `33 слова о дизайне #${i+1}`,
      duration: '1ч 47м',
      thumbnail: cardImgs[random(0,2)],
    });
  }

  return (
    <ul className="movies-card-list">
      {demoCard.map((item, index) => {
        return <MoviesCard card={item} key={index} isSavedMovies={isSavedMovies} isSaved={Boolean(random(0,1))} />;
      })}
    </ul>
  );
};
