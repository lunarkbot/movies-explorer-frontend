import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__group">
          <p className="footer__copyright">&copy; 2022</p>
          <ul className="footer__list">
            <li>
              <a href="https://practicum.com/" target="_blank" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li>
              <a href="https://github.com/lunarkbot" target="_blank" className="footer__link">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
