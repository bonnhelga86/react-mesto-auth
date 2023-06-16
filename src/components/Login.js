import SignForm from './SignForm';

function Login() {
  return(
    <div className="sign">
      <h2 className="sign__title">Вход</h2>

      <SignForm submitButtonName="Войти" />

    </div>
  )
}

export default Login;
