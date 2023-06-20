import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignForm from './SignForm';
import * as auth from '../utils/auth.js';

function Register({ changeHeaderMenuData, onHandleRegister }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    changeHeaderMenuData({link: '/sign-in', name: 'Войти'});
  }, [])

  return(
    <div className="sign">
      <h2 className="sign__title">Регистрация</h2>

      <SignForm submitButtonName="Зарегистрироваться" onSubmit={onHandleRegister} />

      <Link to="/sign-in" className="sign__link">Уже зарегистрированы? Войти</Link>
    </div>
  )
}

export default Register;
