import React from 'react';
import { useNavigate  } from 'react-router-dom';
import SignForm from './SignForm';
import * as auth from '../utils/auth.js';

function Login({ changeHeaderMenuData, onHandleLogin }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    changeHeaderMenuData({link: '/sign-up', name: 'Регистрация'});
  }, [])

  function handleAuthorize(email, password) {
    auth.authorize(email, password)
        .then(data => {
          if (data.token){
            localStorage.setItem('token', data.token);
            onHandleLogin(email);
            navigate('/', {replace: true});
            return data;
          } else {
            return;
          }
        })
        .catch(error => {
          console.error(error);
        });
  }

  return(
    <div className="sign">
      <h2 className="sign__title">Вход</h2>

      <SignForm submitButtonName="Войти" onSubmit={handleAuthorize} />

    </div>
  )
}

export default Login;
