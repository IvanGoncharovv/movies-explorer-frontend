import './App.css';
import React from "react";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { Route, Routes} from "react-router-dom";
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="page" >
      <Routes>
        <Route path="/" element={<Main loggedIn={false}/>}/>
        <Route path="/signin" element={<Login loggedIn={false}/>}/>
        <Route path="/signup" element={<Register loggedIn={false}/>}/>
        <Route path="/movies" element={<Movies loggedIn={true}/>}/>
        <Route path="/saved-movies" element={<SavedMovies loggedIn={true}/>}/>
        <Route path="/profile" element={<Profile loggedIn={true} name="Виталий" email="pochta@yandex.ru"/>}/>
        <Route path="/not-found" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;