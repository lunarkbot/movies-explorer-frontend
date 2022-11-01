import './saved-movies.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {SearchForm} from '../../components/SearchForm/SearchForm';
import {MoviesCardList} from '../../components/MoviesCardList/MoviesCardList';

export const SavedMoviesPage = () => {
  return (
    <div className="saved-movies">
      <Header />
      <main className="saved-movies__content">
        <SearchForm />
        <MoviesCardList isSavedMovies={true} />
      </main>
      <Footer />
    </div>
  );
}
