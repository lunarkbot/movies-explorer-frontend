import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { CurrentUserContext } from '../../context/currentUserContext';
import {
  SignInPage,
  MainPage,
  MoviesPage,
  NotFoundPage,
  ProfilePage,
  SavedMoviesPage,
  SignUpPage,
} from '../../pages';
import {mainApi} from '../../utils/MainApi';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    mainApi.getCurrentUser()
      .then((user) => {
        setCurrentUser({
          id: user._id,
          name: user.name,
          email: user.email,
          isLoggedIn: true,
        })
      })
      .catch((err) => console.log(`Error ${err.status}: ${err.text}`))
      .finally(() => setIsChecked(true));
  }, [])

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <BrowserRouter>
        <Routes>

          <Route path={'/'} element={<MainPage />} />
          <Route path={'/signin'} element={<SignInPage />} />
          <Route path={'/signup'} element={<SignUpPage />} />
          {isChecked &&
            <>
              <Route element={<PrivateRoute />}>
                <Route path={'/movies'} element={<MoviesPage />} />
                <Route path={'/saved-movies'} element={<SavedMoviesPage />} />
                <Route path={'/profile'} element={<ProfilePage />} />
              </Route>
              <Route path={'*'} element={<NotFoundPage />} />
            </>
          }

        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
