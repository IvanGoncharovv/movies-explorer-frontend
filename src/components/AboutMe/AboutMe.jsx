import React from 'react';
import './AboutMe.css';
import photo from "../../images/Photo.jpg"

function AboutMe() {
  return(
    <section className="about-me block-section">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__container-info">
          <h3 className="about-me__subtitle">Иван</h3>
          <p className="about-me__text">Фронтенд разработчик, 25 лет</p>
          <article className="about-me__info">
            Я родился в Москве, но в настоящее время живу в Турции. Увлекаюсь путешествиями и музыкой. 
            В данный момент работаю в сфере IT, учу js, чтобы стать Frontend разработчиком.
            В далнейшем планирую продолжать обучение самостоятельно, чтобы стать профессионалом.                         
          </article>
          <nav className="about-me__contacts">
            <a href="https://github.com/Graverrr" target="blank" className="about-me__link">Github</a>
          </nav>
        </div>
        <img className="about-me__image" src={photo} alt="фото студента" /> 
      </div>
    </section>
  );
}

export default AboutMe;