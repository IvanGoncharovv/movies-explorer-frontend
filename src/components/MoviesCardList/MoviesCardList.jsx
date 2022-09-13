import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { initialMovies, savedMovies} from "../../const/const"

function MoviesCardList({ cardsList }) {const moviesList = initialMovies;
    const savedMoviesList = savedMovies;

  return (
    <section>
      <div className="cards">
        {cardsList === "searchCards" ? (
          moviesList.map((card) => { return <MoviesCard  img={card.link} cardsList={cardsList} />}) ) : (
            savedMoviesList.map((card) => {
              return <MoviesCard img={card.link} cardsList={cardsList} />
            })
          )}
      </div>
      <div className="cards__btn-block">{cardsList === "searchCards" ? (<>
        <button className="cards__btn">Ещё</button></>) : ('')}
      </div>
    </section>
  )
}

export default MoviesCardList;