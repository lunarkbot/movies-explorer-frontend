import './Portfolio.css';

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com" target="_blank">Статичный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com" target="_blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com" target="_blank">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
};
