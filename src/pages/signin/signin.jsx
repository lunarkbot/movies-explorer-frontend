import './signin.css';
import Logo from '../../components/UI/Logo/Logo';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import Button from '../../components/UI/Button/Button';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {switchLogin} from '../../store/userSlice';

export const SignInPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  function handleClick (e) {
    e.preventDefault();
    dispatch(switchLogin());
    history('/movies');
  }

  return (
    <form name="signin" method="post"  className="signin">
      <Logo secondClass="signin__logo" />
      <h1 className="signin__title">Рады видеть!</h1>
      <div className="signin__inputs-group">
        <MyInput
          name="email"
          placeholder="E-mail"
          value="pochta@yandex.ru"
        />
        <MyInput
          type="password"
          name="password"
          placeholder="Пароль"
        />
      </div>
      <div className="signin__buttons-group">
        <Button
          type="submit"
          className="signin__button"
          onClick={handleClick}
        >
          Войти
        </Button>
        <div className="signin__text">
          Ещё не зарегистрированы? <Link to={'/signup'} className="signin__link">Регистрация</Link>
        </div>
      </div>
    </form>
  );
};
