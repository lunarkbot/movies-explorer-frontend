import './profile.css';
import {Header} from '../../components/Header/Header';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import {useEffect, useState} from 'react';
import Button from '../../components/UI/Button/Button';
import {useNavigate} from 'react-router-dom';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';

export const ProfilePage = () => {
  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  }

  const history = useNavigate();
  const {values, handleChange, errors, isValid, setValues } = useFormAndValidation();
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setValues({
      email: 'pochta@yandex.ru',
      name: 'Виталий',
    });
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      setIsEditable(false);
    }
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEditable(true);
  }

  function handleSignOut(e) {
    e.preventDefault();
    history('/');
  }

  return (
    <div className="profile">
      <Header />
      <form className="profile__content" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {user.name}!</h1>
        {isEditable ?
          (<div className="profile__inputs-group">
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
          </div>)
          : (<ul className="profile__list">
                <li className="profile__list-item">
                  <span>Имя</span>
                  <span>{user.name}</span>
                </li>
                <li className="profile__list-item">
                  <span>E-mail</span>
                  <span>{user.email}</span>
                </li>
            </ul>)
        }
        <div className="profile__buttons-group">
          {isEditable ? <Button type="submit" className="profile__button">Сохранить</Button>
                      : <Button className="profile__button" onClick={handleEdit}>Редактировать</Button>
          }
          <Button className="profile__button-signout" onClick={handleSignOut}>Выйти из аккаунта</Button>
        </div>
      </form>
    </div>
  );
}
