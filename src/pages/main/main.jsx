import {Header} from '../../components/Header/Header';
import React from 'react';
import {Footer} from '../../components/Footer/Footer';
import './main.css';
import {Promo} from '../../components/Promo/Promo';
import {AboutProject} from '../../components/AboutProject/AboutProject';
import {Techs} from '../../components/Techs/Techs';
import {AboutMe} from '../../components/AboutMe/AboutMe';

export const MainPage = () => {
  return (
    <main className="main">
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </main>
  );
};
