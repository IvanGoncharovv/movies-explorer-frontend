import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({movie, clickHandler}) {

  const imageHost = 'https://api.nomoreparties.co';
  const {
    title,
    image,
    duration,
    trailerLink,
    isActive,
    id,
} = movie;

//перевод длительности фильма в нужный формат
  function movieDuration(time) {
    const hours = Math.floor(time / 60);
    const minute = time % 60;
    return `${hours}ч ${minute}м`;
  }

  const img = typeof image === 'string' ? image : imageHost + image.url;
  const location = useLocation();
  const renderIcon = () => {
    if (location.pathname === "/saved-movies") {
      return 'card__delete'
    } else {
      return `card__like ${isActive ? 'card__like_active' : ''}`
    }
  }

  const onClick = (e) => {
    e.preventDefault();
    clickHandler(movie);
  }

  const durationTime = movieDuration(duration);
      
  return(
    <>
      <article className="card" key={id}>
        <div className="card__group">
          <div className="card__description">
            <h2 className="card__title">{title}</h2>
            <p className="card__duration">{durationTime}</p>
          </div>
        </div>
        <a href={trailerLink} className="card__link" target='_blank' rel="noreferrer">
          <img className="card__img" alt="Заставка" src={img} />
        </a>
        <button className={renderIcon()} onClick={onClick}></button>
      </article>

    </>
  )
}
 
export default MoviesCard;