import './movies.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';

export const MoviesPage = () => {
  return (
    <div className="movies">
      <Header />
      <main className="movies__content">
        Movies
      </main>
      <Footer />
    </div>
  );
}
