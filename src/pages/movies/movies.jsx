import './movies.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {SearchForm} from '../../components/SearchForm/SearchForm';
import {MoviesCardList} from '../../components/MoviesCardList/MoviesCardList';
import Button from '../../components/UI/Button/Button';
import {useEffect, useState} from 'react';
import {moviesApi} from '../../utils/MoviesApi';
import {useMovies} from '../../hooks/useMovies';
import {SearchErrors} from '../../components/SearchErrors/SearchErrors';
import {getFilteredMovies} from '../../utils';
import {mainApi} from '../../utils/MainApi';
import {useCheckbox} from '../../hooks/useCheckbox';
import Preloader from '../../components/Preloader/Preloader';

export const MoviesPage = () => {
  const { movies, isMore, getFirst, getNext } = useMovies();
  const [ searchValue, setSearchValue ] = useState(sessionStorage.getItem('searchValue') || '');
  const [ searchAll, setSearchAll ] = useState(false);
  const [ error, setError ] = useState('');
  const [ idList, setIdList ] = useState([]);
  const [ idChecked, setIdChecked ] = useState(false);
  const [ isPending, setIsPending ] = useState(false);
  useCheckbox(searchAll, setSearchAll);

  useEffect(() => {
    mainApi.getMovies()
      .then((res) => {
        setIdList([
          ...res.reduce((acc, item) => {
            return [...acc, item.movieId]
          }, []),
        ])
      })
      .finally(() => {
        setIdChecked(true);
      })
  }, [movies])

  useEffect(() => {
    recoverFromStore();
  }, [searchAll])

  useEffect(() => {
    recoverFromStore();
  }, [])

  function handleCheckbox(e) {
    setSearchAll(!searchAll);
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function recoverFromStore() {
    if (sessionStorage.getItem('movies')) {
      const result = getFilteredMovies(JSON.parse(sessionStorage.getItem('movies')), searchValue, searchAll);

      if (result.length === 0) {
        setError('Ничего не найдено.');
      } else {
        getFirst(result);
        setError('');
      }

      return true;
    } else {
      return false;
    }
  }

  function handleSubmmit(e) {
    e.preventDefault();
    if (!searchValue) {
      setError('Нужно ввести ключевое слово.');
      return;
    }

    sessionStorage.setItem('searchValue', searchValue);

    if (!recoverFromStore()) {
      setIsPending(true);
      moviesApi.getMovies()
        .then((movies) => {
          const result = getFilteredMovies(movies, searchValue, searchAll);

          if (result.length === 0) {
            setError('Ничего не найдено.');
          } else {
            sessionStorage.setItem('movies', JSON.stringify(movies));
            getFirst(result);
            setError('');
          }
        })
        .catch(() => {
          setError(`Во время запроса произошла ошибка. Возможно, 
          проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`);
        })
        .finally(() => {
          setIsPending(false);
        })
    }
  }

  return (
    <div className="movies">
      <Header />
      <main className="movies__content">
        <SearchForm
          handler={handleSubmmit}
          checked={searchAll}
          handleCheckbox={handleCheckbox}
          handleChange={handleChange}
          value={searchValue}
        />
        {error ? <SearchErrors>{ error }</SearchErrors> : idChecked && <MoviesCardList movies={movies} idList={idList} />}
        <div className="movies__more-wrap">
          {isPending && <Preloader />}
          {(isMore && !error) && <Button
            type="button"
            title="Загрузить еще"
            className="movies__more-button"
            onClick={getNext}
          >
            Ещё
          </Button>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
