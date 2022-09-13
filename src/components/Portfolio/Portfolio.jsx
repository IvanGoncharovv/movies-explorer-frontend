import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg'

function Portfolio() {
	
  return(
    <section className="portfolio block-section">
      <p className="student__portfolio">Портфолио</p>
      <ul className="student__list">
        <li className="student__item">
          <a className="student__item-link" style={{ backgroundImage: `url(${arrow})` }} href="https://github.com/Graverrr" target="_blank" rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="student__item">
          <a className="student__item-link" style={{ backgroundImage: `url(${arrow})` }} href="https://github.com/Graverrr" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="student__item">
          <a className="student__item-link" style={{ backgroundImage: `url(${arrow})` }} href="https://github.com/Graverrr" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;