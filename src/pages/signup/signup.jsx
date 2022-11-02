import './signup.css';
import Logo from '../../components/UI/Logo/Logo';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import Button from '../../components/UI/Button/Button';
import {Link, useNavigate} from 'react-router-dom';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';
import {useContext, useEffect, useState} from 'react';
import {ErrorMessage} from '../../components/UI/Error/ErrorMessage';
import {mainApi} from '../../utils/MainApi';
import {useFormError} from '../../hooks/useFormError';
import {CurrentUserContext} from '../../context/currentUserContext';

export const SignUpPage = () => {
  const {values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();
  const {error, showError} = useFormError();
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name: '',
      email: '',
      password: '',
    });
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    mainApi.signUp(values)
      .then(() => {
        mainApi.signIn({
          email: values.email,
          password: values.password,
        })
          .then((user) => {
            setCurrentUser({
              id: user._id,
              name: user.name,
              email: user.email,
              isLoggedIn: true,
            });
            navigate('/movies');
          })
          .catch((err) => {
            showError(err.statusText);
          })
      })
      .catch((err) => {
        if (err.status === 409) {
          showError('Пользователь с таким email уже существует.');
        } else if (err.status === 500) {
          showError('На сервере произошла ошибка.');
        } else if (err.status === 404) {
          showError('Страница по указанному маршруту не найдена.');
        }  else {
          showError('При регистрации пользователя произошла ошибка.');
        }
      })
      .finally(() => setIsPending(false));
  }

  return (
    <form name="signup" method="post"  className="signup" onSubmit={handleSubmit}>
      <Logo secondClass="signup__logo" />
      <h1 className="signup__title">Добро пожаловать!</h1>
      <div className="signup__inputs-group">
        <MyInput
          name="name"
          placeholder="Имя"
          handler={handleChange}
          pattern="[A-Za-z А-Яа-яёЁ]{2,30}"
          min="2"
          max="30"
          errorText={errors.name}
          value={values.name}
        />
        <MyInput
          type="email"
          name="email"
          placeholder="E-mail"
          handler={handleChange}
          min="2"
          max="30"
          value={values.email}
          errorText={errors.email}
        />
        <MyInput
          type="password"
          name="password"
          placeholder="Пароль"
          min="8"
          handler={handleChange}
          value={values.password}
          errorText={errors.password}
        />
      </div>
      <div className="signup__buttons-group">
        <Button
          type="submit"
          className="signup__button"
          disabled={!(isValid && !isPending)}
        >
          <ErrorMessage>{ error }</ErrorMessage>
          Зарегистрироваться
        </Button>
        <div className="signup__text">
          Уже зарегистрированы? <Link to={'/signin'} className="signup__link">Войти</Link>
        </div>
      </div>
    </form>
  );
};
