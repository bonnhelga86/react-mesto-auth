import React from 'react';
import SignForm from './SignForm';

function Login({ changeHeaderMenuData, onHandleAuthorize }) {

  React.useEffect(() => {
    changeHeaderMenuData({link: '/sign-up', name: 'Регистрация'});
  }, [])

  return(
    <div className="sign">
      <h2 className="sign__title">Вход</h2>

      <SignForm submitButtonName="Войти" onSubmit={onHandleAuthorize} action='authorize' />

    </div>
  )
}

export default Login;
