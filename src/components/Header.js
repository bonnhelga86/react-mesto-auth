import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, headerMenuData, email, signOut }) {

  return(
    <header className="header">
      <img src={logo} alt="Логотип Mesto" className="logo" />
      <div className='header__menu'>
        {isLoggedIn && <p className="header__email">{email}</p>}

        <Link
          to={headerMenuData.link}
          className="header__sign-link"
          onClick={isLoggedIn && signOut}
        >
          {headerMenuData.name}
        </Link>
      </div>
    </header>
  )
}

export default Header;
