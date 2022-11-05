import React from "react";
import './Login.css';
import Auth from '../Auth/Auth';
import Form from '../Form/Form';
import ValidationForm from '../../utils/ValidationForm' 

function Login({onLogin, loginError}) {
  
  const validation = ValidationForm();
  const { values, handleChange, errors, isValid, onFocus, isFocused } = validation;
  const { email, password } = values;


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({email, password});
    validation.resetForm({email, password});
  };

  return (
    <Auth >
      <Form 
        onSubmit={handleSubmit} 
        isValid={isValid} 
        validation={validation}
        loginError={loginError}
        textBtn="Войти" 
        textSubtitle="Ещё не зарегистрированы?" 
        textLink="Регистрация"
        to="/signup"
        title="Рады видеть!"
      >
        <p className="form__input-title">E-mail</p>
        <input 
        type="email" 
        className="form__input" 
        name="email" 
        defaultValue={values.email}
        onChange={handleChange} 
        onFocus={onFocus}
        required/>
        <p className="form__input-title">Пароль</p>
        <input
        type="password"
        className="form__input form__input-login"
        name="password" 
        minLength="8" 
        defaultValue={values.password} 
        onChange={handleChange} 
        onFocus={onFocus}
        required/>
      </Form> 
    </Auth>
  );
}

export default Login;