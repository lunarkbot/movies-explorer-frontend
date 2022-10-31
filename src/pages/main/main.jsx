import {Header} from '../../components/Header/Header';
import React from 'react';
import {Footer} from '../../components/Footer/Footer';
import './main.css';

export const MainPage = () => {
  return (
    <main className="main">
      <Header />
      <main>
        Main
      </main>
      <Footer />
    </main>
  );
};
