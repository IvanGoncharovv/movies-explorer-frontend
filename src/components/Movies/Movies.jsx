import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(loggedIn) {
  return (
    <main className="content">
      <Header loggedIn={loggedIn}/>
      <SearchForm />
      <MoviesCardList cardsList="searchCards"/>
      <Footer />
    </main>
  );
}

export default Movies;