import './profile.css';
import {Header} from '../../components/Header/Header';
import {useContext, useEffect, useState} from 'react';
import Button from '../../components/UI/Button/Button';
import {useNavigate} from 'react-router-dom';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';
import {CurrentUserContext} from '../../context/currentUserContext';
import {ErrorMessage} from '../../components/UI/Error/ErrorMessage';
import {mainApi} from '../../utils/MainApi';
import {useFormError} from '../../hooks/useFormError';

export const ProfilePage = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const history = useNavigate();
  const {values, handleChange, errors, isValid, setValues } = useFormAndValidation();
  const [isEditable, setIsEditable] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const {error, showError} = useFormError();
  const [focus, setFocus] = useState({
    email: false,
    name: false,
  });

  function handleFocus(e) {
    setFocus({
      ...focus,
      [e.target.name]: !focus[e.target.name],
    });
  }

  useEffect(() => {
    setValues({
      email: currentUser.email,
      name: currentUser.name,
    });
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();

    mainApi.updateUser(values)
      .then((user) => {
        setCurrentUser({
          ...currentUser,
          name: user.name,
          email: user.email,
        })

        setIsEditable(false)
      })
      .catch((err) => {
        if (err.status === 409) {
          showError('Пользователь с таким email уже существует.');
        } else if (err.status === 500) {
          showError('На сервере произошла ошибка.');
        } else if (err.status === 404) {
          showError('Страница по указанному маршруту не найдена.');
        } else {
          showError('При обновлении профиля произошла ошибка.');
        }
      })
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEditable(true);
  }

  function handleSignOut(e) {
    e.preventDefault();
    mainApi.signOut()
      .then(() => {
        setCurrentUser({
          isLoggedIn: false,
        })
        history('/');
      })
      .catch((err) => console.log(err.statusText));
  }

  return (
    <div className="profile">
      <Header />
      <form className="profile__content" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        {isEditable ?
          (<div className="profile__list-wrap">
            <ul className="profile__list">
              <li className="profile__list-item">
                <span className={`${focus.name && 'profile__list-item-focused'}`}>Имя</span>
                <span>
                  <input
                    type="name"
                    name="name"
                    onInput={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    minLength="2"
                    maxLength="30"
                    pattern="[A-Za-z А-Яа-яёЁ]{2,30}"
                    value={values.name}
                    className="profile__list-input"
                  />
                </span>
              </li>
              <li className="profile__list-item">
                <span className={`${focus.email && 'profile__list-item-focused'}`}>E-mail</span>
                <span>
                  <input
                    type="email"
                    name="email"
                    onInput={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    value={values.email}
                    className="profile__list-input"
                  />
                </span>
              </li>
            </ul>
            <ErrorMessage>{errors.name || errors.email}</ErrorMessage>
          </div>)
          : (<ul className="profile__list">
                <li className="profile__list-item">
                  <span>Имя</span>
                  <span>{currentUser.name}</span>
                </li>
                <li className="profile__list-item">
                  <span>E-mail</span>
                  <span>{currentUser.email}</span>
                </li>
            </ul>)
        }
        <div className="profile__buttons-group">
          {isEditable ? <Button
                          type="submit"
                          className="profile__button-save"
                          disabled={!(isValid && !isPending)}
                        >
                          <ErrorMessage>{ error }</ErrorMessage>
                          Сохранить</Button>
                      : <>
                          <Button className="profile__button" onClick={handleEdit}>Редактировать</Button>
                          <Button
                            className="profile__button-signout"
                            onClick={handleSignOut}
                          >
                            Выйти из аккаунта</Button>
                        </>
          }
        </div>
      </form>
    </div>
  );
}
