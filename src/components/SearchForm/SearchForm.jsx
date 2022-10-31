import './SearchForm.css';
import Button from '../UI/Button/Button';
import {FilterCheckbox} from '../UI/FilterCheckbox/FilterCheckbox';

export const SearchForm = () => {
  function handleChange(e) {
    console.log(e);
  }

  return (
    <div className="search-form-wrap">
      <form name="search" method="get" className="search-form">
        <div className="search-form__input-wrap">
          <input type="text" name="query" placeholder="Фильм" className="search-form__input" />
          <Button type="submit" className="search-form__button">Поиск</Button>
        </div>
        <FilterCheckbox name="small" checked={false} label="Короткометражки" handler={handleChange} />
      </form>
    </div>
  );
};
