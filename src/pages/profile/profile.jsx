import './profile.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {MyInput} from '../../components/UI/MyInput/MyInput';
import {useState} from 'react';
import Button from '../../components/UI/Button/Button';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {switchLogin} from '../../store/userSlice';

export const ProfilePage = () => {
  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  }

  const dispatch = useDispatch();
  const history = useNavigate();

  const [isEditable, setIsEditable] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditable(false);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEditable(true);
  }

  function handleSignOut(e) {
    e.preventDefault();
    dispatch(switchLogin());
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
              value={user.name}
            />
            <MyInput
              name="email"
              placeholder="E-mail"
              value={user.email}
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
