import React from 'react';
import { useNavigate  } from 'react-router-dom';
import SignForm from './SignForm';
import * as auth from '../utils/auth.js';

function Login({ changeHeaderMenuData, onHandleAuthorize }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    changeHeaderMenuData({link: '/sign-up', name: 'Регистрация'});
  }, [])

  return(
    <div className="sign">
      <h2 className="sign__title">Вход</h2>

      <SignForm submitButtonName="Войти" onSubmit={onHandleAuthorize} />

    </div>
  )
}

export default Login;
