import React from 'react';
import SignForm from './SignForm';

function Login({ changeCurrentRoute, onAuthorize }) {
  React.useEffect(() => {
    changeCurrentRoute('login');
  }, [])

  return(
    <div className="sign">
      <h2 className="sign__title">Вход</h2>

      <SignForm submitButtonName="Войти" onSubmit={onAuthorize} />

    </div>
  )
}

export default Login;
