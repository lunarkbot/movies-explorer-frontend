import './movies.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {SearchForm} from '../../components/SearchForm/SearchForm';

export const MoviesPage = () => {
  return (
    <div className="movies">
      <Header />
      <main className="movies__content">
        <SearchForm />
      </main>
      <Footer />
    </div>
  );
}
