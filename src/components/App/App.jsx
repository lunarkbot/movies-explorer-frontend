import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SignInPage,
  MainPage,
  MoviesPage,
  NotFoundPage,
  ProfilePage,
  SavedMoviesPage,
  SignUpPage,
} from '../../pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/signin'} element={<SignInPage />} />
        <Route path={'/signup'} element={<SignUpPage />} />
        <Route path={'/movies'} element={<MoviesPage />} />
        <Route path={'/saved-movies'} element={<SavedMoviesPage />} />
        <Route path={'/profile'} element={<ProfilePage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
