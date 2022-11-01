import './AboutMe.css';
import {Heading} from '../UI/Heading/Heading';
import logo from '../../images/pic.jpg';
import {Portfolio} from '../Portfolio/Portfolio';

export const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__content">
        <Heading secondClass="about-me__heading">Студент</Heading>
        <article className="about-me__profile">
          <div className="about-me__info">
            <h3 className="about-me__subheading">Виталий</h3>
            <p className="about-me__prof">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс
              по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className="about-me__link" href="https://github.com" target="_blank">Github</a>
          </div>
          <div>
            <img src={logo} alt="Виталий" className="about-me__photo" />
          </div>
        </article>
        <Portfolio />
      </div>
    </section>
  );
};
