import './saved-movies.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {SearchForm} from '../../components/SearchForm/SearchForm';
import {MoviesCardList} from '../../components/MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';
import {mainApi} from '../../utils/MainApi';
import {SearchErrors} from '../../components/SearchErrors/SearchErrors';
import {getFilteredMovies} from '../../utils';
import {useCheckbox} from '../../hooks/useCheckbox';

export const SavedMoviesPage = () => {
  const [ error, setError ] = useState('');
  const [ movies, setMovies ] = useState();
  const [ searchValue, setSearchValue ] = useState('');
  const [ searchAll, setSearchAll ] = useState(false);
  useCheckbox(searchAll, setSearchAll);

  useEffect(() => {
    mainApi.getMovies()
      .then((res) => {
        setMovies(res);
        setError('');
      })
      .catch(() => {
        setError(`Во время запроса произошла ошибка. Возможно, 
        проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`);
      })
  }, [])

  function handleRemove(id) {
    setMovies([
      ...movies.filter(item => id !== item.movieId)
    ])
  }

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

    mainApi.getMovies()
      .then((res) => {
        if (res.length === 0) {
          setError('Ничего не найдено.');
        } else {
          setMovies(getFilteredMovies(res, searchValue, searchAll));
          setError('');
        }
      })
      .catch((err) => {
        setError(`Во время запроса произошла ошибка. Возможно, 
        проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`);
      })
  }

  return (
    <div className="saved-movies">
      <Header />
      <main className="saved-movies__content">
        <SearchForm
          handler={handleSubmmit}
          checked={searchAll}
          handleCheckbox={handleCheckbox}
          handleChange={handleChange}
          value={searchValue}
        />
        {error
          ? <SearchErrors>{ error }</SearchErrors>
          : <MoviesCardList movies={movies} isSavedMovies={true} handleRemove={handleRemove} />}
      </main>
      <Footer />
    </div>
  );
}
