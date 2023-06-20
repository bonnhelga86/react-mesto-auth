import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, currentRoute, email }) {

  return(
    <header className="header">
      <img src={logo} alt="Логотип Mesto" className="logo" />
      <div className='header__menu'>
        {isLoggedIn && <p className="header__email">{email}</p>}

        <Link to={currentRoute === 'login' ? '/sign-up' : 'sign-in'} className="header__sign-link">
          {currentRoute === 'login' ? 'Регистрация' : 'Войти'}
        </Link>
      </div>
    </header>
  )
}

export default Header;
