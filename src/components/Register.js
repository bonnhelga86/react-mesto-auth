import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignForm from './SignForm';
import * as auth from '../utils/auth.js';

function Register({ changeHeaderMenuData }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    changeHeaderMenuData({link: '/sign-in', name: 'Войти'});
  }, [])

  function handleRegister(email, password) {
    auth.register(email, password)
        .then(data => {
          navigate('/sign-in', {replace: true});
        })
        .catch(error => {
          console.error(error);
        });
  }

  return(
    <div className="sign">
      <h2 className="sign__title">Регистрация</h2>

      <SignForm submitButtonName="Зарегистрироваться" onSubmit={handleRegister} />

      <Link to="/sign-in" className="sign__link">Уже зарегистрированы? Войти</Link>
    </div>
  )
}

export default Register;
