import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            to={'/'}
            end
            className={(navData) => navData.isActive
              ? "navigation__link navigation__link_type_main navigation__link_active"
              : "navigation__link navigation__link_type_main" }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/movies'}
            className={(navData) => navData.isActive
              ? "navigation__link navigation__link_active" : "navigation__link" }
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/saved-movies'}
            className={(navData) => navData.isActive
              ? "navigation__link navigation__link_active" : "navigation__link" }
          >
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
