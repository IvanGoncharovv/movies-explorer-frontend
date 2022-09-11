import React from "react";
import './SearchForm.css';
import Checkbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search.svg'

function Search() {
  return(
    <div className="search">
      <form className="search__elements">
        <img className="search__icon" src={searchIcon} alt='иконка поиска'></img>
        <input className="search__input" placeholder="Фильм"/>
        <button className="search__button"></button>
      </form>
      <Checkbox />
    </div>
  )
}

export default Search;