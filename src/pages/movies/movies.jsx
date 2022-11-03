import './movies.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {SearchForm} from '../../components/SearchForm/SearchForm';
import {MoviesCardList} from '../../components/MoviesCardList/MoviesCardList';
import Button from '../../components/UI/Button/Button';
import {useContext, useEffect, useState} from 'react';
import {CurrentUserContext} from '../../context/currentUserContext';
import {moviesApi} from '../../utils/MoviesApi';
import {useMovies} from '../../hooks/useMovies';
import {SearchErrors} from '../../components/SearchErrors/SearchErrors';
import {getFilteredMovies} from '../../utils';
import {mainApi} from '../../utils/MainApi';

export const MoviesPage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { movies, isMore, getFirst, getNext } = useMovies();
  const [ searchValue, setSearchValue ] = useState('');
  const [ searchAll, setSearchAll ] = useState(false);
  const [ error, setError ] = useState('');
  const [ idList, setIdList ] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('checkbox')) {
      setSearchAll(Boolean(localStorage.getItem('checkbox')))
    }
  }, [setSearchAll]);

  useEffect(() => {
    if (searchAll) {
      localStorage.setItem('checkbox', 'true');
    } else {
      localStorage.removeItem('checkbox');
    }
  }, [searchAll]);

  useEffect(() => {
    mainApi.getMovies()
      .then((res) => {
        setIdList([
          ...res.reduce((acc, item) => {
            return [...acc, item.movieId]
          }, []),
        ])
      })
  }, [movies])

  useEffect(() => {
    console.log(idList)
  }, [idList])

  function handleCheckbox(e) {
    setSearchAll(!searchAll);
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmmit(e) {
    e.preventDefault();
    if (!searchValue) {
      setError('Нужно ввести ключевое слово.');
      return;
    }

    if (sessionStorage.getItem('movies')) {
      const result = getFilteredMovies(JSON.parse(sessionStorage.getItem('movies')), searchValue, searchAll);

      if (result.length === 0) {
        setError('Ничего не найдено.');
      } else {
        getFirst(result);
        setError('');
      }
    } else {
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
        {error ? <SearchErrors>{ error }</SearchErrors> : <MoviesCardList movies={movies} idList={idList} />}
        <div className="movies__more-wrap">
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
