import React from 'react';
import { Link } from 'react-router-dom';
import SignForm from './SignForm';

function Register({ changeHeaderMenuData, onHandleRegister }) {

  React.useEffect(() => {
    changeHeaderMenuData({link: '/sign-in', name: 'Войти'});
  }, [])

  return(
    <div className="sign">
      <h2 className="sign__title">Регистрация</h2>

      <SignForm submitButtonName="Зарегистрироваться" onSubmit={onHandleRegister} action='register' />

    </div>
  )
}

export default Register;
