import './SearchForm.css';
import Button from '../UI/Button/Button';
import {FilterCheckbox} from '../UI/FilterCheckbox/FilterCheckbox';

export const SearchForm = ({ handler, handleChange, value, handleCheckbox, checked }) => {
  return (
    <div className="search-form-wrap">
      <form name="search" method="get" className="search-form" onSubmit={handler}>
        <div className="search-form__input-wrap">
          <input
            type="text"
            name="query"
            placeholder="Фильм"
            className="search-form__input"
            onInput={handleChange}
            value={value}
          />
          <Button type="submit" className="search-form__button">Поиск</Button>
        </div>
        <FilterCheckbox name="small" handler={handleCheckbox} checked={checked} label="Короткометражки" />
      </form>
    </div>
  );
};
