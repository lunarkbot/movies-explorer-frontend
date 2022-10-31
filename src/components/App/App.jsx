import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MainPage
} from '../../pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
