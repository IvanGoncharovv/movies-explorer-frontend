import React from "react";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import Search from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({loggedIn}) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Search />
      <MoviesCardList cardsList="savedCards"/>
      <Footer />
    </>
  );
}
  
export default SavedMovies;