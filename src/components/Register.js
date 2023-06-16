import { Link } from 'react-router-dom';
import SignForm from './SignForm';

function Register() {
  return(
    <div className="sign">
      <h2 className="sign__title">Регистрация</h2>

      <SignForm submitButtonName="Зарегистрироваться" />

      <Link to="/sign-in" className="sign__link">Уже зарегистрированы? Войти</Link>
    </div>
  )
}

export default Register;
