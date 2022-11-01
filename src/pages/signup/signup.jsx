import './signup.css';
import Logo from '../../components/UI/Logo/Logo';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import Button from '../../components/UI/Button/Button';
import {Link} from 'react-router-dom';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';
import {useEffect} from 'react';

export const SignUpPage = () => {
  const {values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

  useEffect(() => {
    setValues({
      name: 'Виталий',
      email: 'pochta@yandex.ru',
      password: 'password',
    });
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
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
          min="2"
          max="30"
          errorText={errors.name}
          value={values.name}
        />
        <MyInput
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
        >
          Зарегистрироваться
        </Button>
        <div className="signup__text">
          Уже зарегистрированы? <Link to={'/signin'} className="signup__link">Войти</Link>
        </div>
      </div>
    </form>
  );
};
