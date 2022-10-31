import './AboutProject.css';
import {Heading} from '../UI/Heading/Heading';

export const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__content">
        <Heading secondClass="about-project__heading">О проекте</Heading>
        <div className="about-project__info">
          <div>
            <h3 className="about-project__info-heading">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h3 className="about-project__info-heading">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <div className="about-project__timeline">
          <div className="about-project__timeline-first-week">1 неделя</div>
          <div className="about-project__timeline-weeks">4 недели</div>
          <div className="about-project__timeline-text">Back-end</div>
          <div className="about-project__timeline-text">Front-end</div>
        </div>
      </div>
    </section>
  );
};
