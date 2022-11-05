import React from "react";
import './SearchForm.css';
import searchIcon from '../../images/search.svg'

function SearchForm({ children, formSubmitHandler, inputValue, inputError, searchInputChangeHandler }) {
  return(
    <div className="search">
      <form 
        className="search__elements" 
        onSubmit={formSubmitHandler}
      >
        <img 
          className="search__icon"
          src={searchIcon}
          alt='иконка поиска'
        ></img>
        <input className="search__input" placeholder="Фильм" 
          value={inputValue}
          onChange={searchInputChangeHandler}
          name="searchForm"
        />
        
        <span className="search__error search__error_active">{inputError}</span>
        <button className="search__button"></button>
      </form>
      
      {children}
    </div>
  )
}

export default SearchForm;