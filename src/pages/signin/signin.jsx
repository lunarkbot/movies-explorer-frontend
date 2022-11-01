import './signin.css';
import Logo from '../../components/UI/Logo/Logo';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import Button from '../../components/UI/Button/Button';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {switchLogin} from '../../store/userSlice';
import {useEffect} from 'react';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';

export const SignInPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const {values, handleChange, errors, isValid, setValues } = useFormAndValidation();

  useEffect(() => {
    setValues({
      email: 'pochta@yandex.ru',
      password: 'password',
    });
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      dispatch(switchLogin());
      history('/movies');
    }
  }

  return (
    <form name="signin" method="post"  className="signin" onSubmit={handleSubmit}>
      <Logo secondClass="signin__logo" />
      <h1 className="signin__title">Рады видеть!</h1>
      <div className="signin__inputs-group">
        <MyInput
          name="email"
          placeholder="E-mail"
          value={values.email}
          handler={handleChange}
          min="2"
          max="30"
          errorText={errors.email}
        />
        <MyInput
          type="password"
          name="password"
          placeholder="Пароль"
          value={values.password}
          handler={handleChange}
          min="8"
          errorText={errors.password}
        />
      </div>
      <div className="signin__buttons-group">
        <Button
          type="submit"
          className="signin__button"
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
