import React from "react";
import './MoviesCard.css';

function MoviesCard({cardsList, img}) {
  const [isSavedMovie, setIsSavedMovie] = React.useState(false);
  const likeIcon = (`card__like ${isSavedMovie ? 'card__like_active' : ''}`); 
  const deleteIcon = ('card__delete');   
  const cardIcon = cardsList === "searchCards" ? likeIcon : deleteIcon;

  function handleLikeMovie() {
    if (!isSavedMovie) {
      setIsSavedMovie(true) 
    } else {
      setIsSavedMovie(false)
    }
  };
      
  return(
    <>
      <article className="card">
        <div className="card__group">
          <div className="card__description">
            <h2 className="card__title">В погоне за бенкси</h2>
            <p className="card__duration">27 минут</p>
          </div>
        </div>
        <img className="card__img" alt="Заставка" src={img}/>
        <button className={cardIcon} onClick={handleLikeMovie}></button>
      </article>

    </>
  )
}
 
export default MoviesCard;