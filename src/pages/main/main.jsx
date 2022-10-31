import {Header} from '../../components/Header/Header';
import React from 'react';
import {Footer} from '../../components/Footer/Footer';
import './main.css';
import {Promo} from '../../components/Promo/Promo';

export const MainPage = () => {
  return (
    <main className="main">
      <Header />
      <main>
        <Promo />
      </main>
      <Footer />
    </main>
  );
};
