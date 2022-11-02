import './movies.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {SearchForm} from '../../components/SearchForm/SearchForm';
import {MoviesCardList} from '../../components/MoviesCardList/MoviesCardList';
import Button from '../../components/UI/Button/Button';
import {useContext} from 'react';
import {CurrentUserContext} from '../../context/currentUserContext';

export const MoviesPage = () => {
  const currentUser = useContext(CurrentUserContext);

  console.log(currentUser);

  return (
    <div className="movies">
      <Header />
      <main className="movies__content">
        <SearchForm />
        <MoviesCardList />
        <div className="movies__more-wrap">
          <Button
            type="button"
            title="Загрузить еще"
            className="movies__more-button"
          >
            Ещё
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
