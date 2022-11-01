import React, {useState} from 'react';
import './Header.css';
import Logo from '../UI/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { switchLogin } from '../../store/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import Button from '../UI/Button/Button';
import Hamburger from '../UI/Hamburger/Hamburger';

export const Header = () => {
  //const { isLoggedIn } = useSelector(state => state.user);
  const isLoggedIn = true;

  const dispatch = useDispatch();
  const history = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerClick() {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }

  function handleSignInClick () {
    //dispatch(switchLogin());
    history('/signin');
  }

  function handleButtonUserClick() {
    history('/profile');
  }

  return (
    <header className="header">
      <div className={`header__content ${isLoggedIn && 'header__content_logged-in'}`}>
        <Logo />
          {isLoggedIn ? (<>
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
