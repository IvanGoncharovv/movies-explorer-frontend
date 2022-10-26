import './App.css';
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { Route, Routes, useNavigate} from "react-router-dom";
import SavedMovies from '../SavedMovies/SavedMovies';
import * as api from '../../utils/MainApi'
import { localStorageConst } from "../../const/const";


function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [loginError, setLoginError] = React.useState(false);
  const [registerError, setRegisterError] = React.useState(false);
  const [succesUpdate, setSuccesUpdate] = React.useState(false);
  const [LoginCheck, setLoginCheck] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const jwt = localStorage.getItem(localStorageConst.jwt);
  const nav = useNavigate();

  //описание авторизации
  function onLogin({ password, email }) {
    return api
    .signin({ password, email })
    .then((data) => {
      if (data.jwt) {
        setLoggedIn(true);
        localStorage.setItem(localStorageConst.jwt, data.jwt);
        localStorage.setItem(localStorageConst.email, email);
        setLoginCheck(true)
         nav("/movies");
      }
    })
    .catch((err) => {
      setLoginError(true);
      console.log(err);
    });
  }


  //описание регистрации
  function onRegister({ name, password, email }) {
    return api
    .signup({ name, password, email })
    .then((data) => {
      if (data.data.email) {
        nav("/signin");
      }
    })
    .catch((err) => {
      
      setRegisterError(true)
      console.log(err);
    });
  }

  //проверка токена
  React.useEffect(() => {
    if (jwt) {
      api
        .checkToken(jwt)
        .then((data) => {
          if (data && data.email) {
            setName(data.name)
            setEmail(data.email);
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoginCheck(true)
        })
    }
    else { setLoginCheck(true) }
  }, [jwt]);

  //получение данных профиля
  React.useEffect(() => {
    if (loggedIn) {
      api
        .getUser()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  //изменение данных профиля
  function handleUpdateUser({ name, email }) {
    api.updateUser({ name, email })
    .then((data) => {
      setCurrentUser(data);
      setSuccesUpdate(true);
    })
      .catch((err) => {
        console.log(err);
      });
  }

  //выход
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    setEmail("");
    nav("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" >
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
          <Route path="/signin" element={<Login onLogin={onLogin} loginError={loginError}/>}/>
          <Route path="/signup" element={<Register onRegister={onRegister} registerError={registerError}/>}/>
          {LoginCheck && <Route path="/movies" element={<Movies loggedIn={loggedIn}/>}/>}
          {LoginCheck && <Route path="/saved-movies" element={<Movies loggedIn={loggedIn}/>}/>}
          {LoginCheck && <Route path="/profile" element={<Profile 
                loggedIn={loggedIn}
                email={email}
                name={name}
                onUpdateUser={handleUpdateUser}
                handleSignOut={handleSignOut}
                succesUpdate={succesUpdate}
                setSuccesUpdate={setSuccesUpdate}/>}/>}
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;