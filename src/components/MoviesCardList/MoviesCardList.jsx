import React, { useState, useEffect } from "react";
import './MoviesCardList.css';
import { notfoundText } from "../../const/const";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const useWindowWidthResize = () => {
  	const getWindowWidth = () => document.body.clientWidth;
    const [width, setWidth] = useState(getWindowWidth());  
    const onResize = () => setTimeout(()=>setWidth(getWindowWidth()), 300);
    useEffect(()=>{
      window.addEventListener('resize', onResize);
      return ()=>window.removeEventListener('resize', onResize);
    }, []);
    return width;
  };
  const { movies, clickHandler, errText, render } = props;

  const getCountItemsByWidth = () => {
    return (document.body.clientWidth > 480) * 2 + 5;
  };

  const defaultLength = getCountItemsByWidth();
  const [length, setLength] = useState(defaultLength);
  const [page, setPage] = useState(1);
  const [loadMoreBtnIsVisible, setloadMoreBtnIsVisible] = useState(movies.length > defaultLength)

  const windowWidth = useWindowWidthResize();

  useEffect(() => {
    setDefaultViewState();
  }, [windowWidth]);

  const { pathname } = useLocation();

  useEffect(()=>{
    setDefaultViewState();
  }, [pathname]);

  const loadMore = () => {
    setPage(page + 1);
    setloadMoreBtnIsVisible(movies.length > (page + 1) * length);
  };

  const setDefaultViewState = () => {
    setPage(1);
    const l = getCountItemsByWidth();
    setLength(l);
    setloadMoreBtnIsVisible(movies.length > l);
  };

  return (
    <section>
      <div className="cards">
        {movies
          .slice(0, page * length)
          .map((movie) => <MoviesCard movie={{ ...movie, title: (movie.nameRU || movie.nameEN)  }} clickHandler={clickHandler} />)
        }
      {!movies.length && render ?
        <div className="cards__notfound">{notfoundText}</div> : ''}
        <div className="cards__err">{errText}</div>
      </div>
      {loadMoreBtnIsVisible ?
        <div className="cards__btn-block">
        	<button className="cards__btn" onClick={loadMore}>Ещё</button>
        </div> : ''
      }
    </section>
  )
}

export default MoviesCardList;