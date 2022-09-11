import React from "react";
import './Login.css';
import Auth from '../Auth/Auth';
import Form from '../Form/Form';

function Login() {
  return (
    <Auth >
      <Form textBtn="Войти" textSubtitle="Ещё не зарегистрированы?" textLink="Регистрация" to="/signup" title="Рады видеть!">
        <p className="form__input-title">E-mail</p>
        <input type="email" className="form__input" name="email_user" required/>
        <p className="form__input-title">Пароль</p>
        <input type="password" className="form__input form__input-login" name="password_user" minLength="8" required/>
      </Form> 
    </Auth>
  );
}

export default Login;