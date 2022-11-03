import React, {useContext, useState} from 'react';
import './Header.css';
import Logo from '../UI/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import {Link, useNavigate} from 'react-router-dom';
import Button from '../UI/Button/Button';
import Hamburger from '../UI/Hamburger/Hamburger';
import {CurrentUserContext} from '../../context/currentUserContext';

export const Header = () => {
  const { currentUser } = useContext(CurrentUserContext);

  const history = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerClick() {
    setIsOpen(!isOpen);
  }

  function handleSignInClick () {
    history('/signin');
  }

  function handleButtonUserClick() {
    history('/profile');
  }

  return (
    <header className="header">
      <div className={`header__content ${currentUser.isLoggedIn && 'header__content_logged-in'}`}>
        <Logo />
          {currentUser.isLoggedIn ? (<>
            <div className={`header__menu ${isOpen && 'header__menu_active'}`}>
              <Navigation />
              <Button
                className="header__button-user"
                onClick={handleButtonUserClick}
              >
                <span>Аккаунт</span>
              </Button>
            </div>
            <div
              onClick={handleHamburgerClick}
              className={`header__menu-wrap ${isOpen && 'header__menu-wrap_active'}`}
            ></div>
            <Hamburger onClick={handleHamburgerClick} isActive={isOpen} />
          </>) : (<>
            <div className="header__user-group">
              <Link to={'/signup'} className="header__link">Регистрация</Link>
              <Button
                className="header__button-login"
                onClick={handleSignInClick}
              >
                Войти
              </Button>
            </div>
          </>)}
      </div>
    </header>
  );
}
