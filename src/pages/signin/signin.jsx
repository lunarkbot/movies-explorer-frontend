import './signin.css';
import Logo from '../../components/UI/Logo/Logo';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import Button from '../../components/UI/Button/Button';
import {Link, useNavigate} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';
import {useFormError} from '../../hooks/useFormError';
import {mainApi} from '../../utils/MainApi';
import {ErrorMessage} from '../../components/UI/Error/ErrorMessage';
import {CurrentUserContext} from '../../context/currentUserContext';

export const SignInPage = () => {
  const navigate = useNavigate();
  const {values, handleChange, errors, isValid, setValues } = useFormAndValidation();
  const {error, showError} = useFormError();
  const [isPending, setIsPending] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      email: '',
      password: '',
    });
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    mainApi.signIn(values)
      .then((user) => {
        setCurrentUser({
          id: user._id,
          name: user.name,
          email: user.email,
          isLoggedIn: true,
        });
        navigate('/movies');
      })
      .catch(err => {
        if (err.status === 401) {
          showError('Вы ввели неправильный логин или пароль.');
        } else {
          showError('При авторизации произошла ошибка.');
        }
      })
      .finally(() => setIsPending(false));
  }

  return (
    <form name="signin" method="post"  className="signin" onSubmit={handleSubmit}>
      <Logo secondClass="signin__logo" />
      <h1 className="signin__title">Рады видеть!</h1>
      <div className="signin__inputs-group">
        <MyInput
          type="email"
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
          disabled={!(isValid && !isPending)}
        >
          <ErrorMessage>{ error }</ErrorMessage>
          Войти
        </Button>
        <div className="signin__text">
          Ещё не зарегистрированы? <Link to={'/signup'} className="signin__link">Регистрация</Link>
        </div>
      </div>
    </form>
  );
};
