import './signup.css';
import Logo from '../../components/UI/Logo/Logo';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import Button from '../../components/UI/Button/Button';
import {Link} from 'react-router-dom';

export const SignUpPage = () => {
  return (
    <form name="signup" method="post"  className="signup">
      <Logo secondClass="signup__logo" />
      <h1 className="signup__title">Добро пожаловать!</h1>
      <div className="signup__group">
        <div className="signup__inputs-group">
          <MyInput
            name="name"
            placeholder="Имя"
            value="Виталий"
          />
          <MyInput
            name="email"
            placeholder="E-mail"
            value="pochta@yandex.ru"
          />
          <MyInput
            type="password"
            name="password"
            placeholder="Пароль"
            value="password"
            hasError={true}
            errorText="Что-то пошло не так..."
          />
        </div>
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
