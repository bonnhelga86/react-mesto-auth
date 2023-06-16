import logo from '../images/logo.svg';

function Header({ isLoggedIn }) {
  return(
    <header className="header">
      <img src={logo} alt="Логотип Mesto" className="logo" />
      <div className='header__menu'>
        {isLoggedIn && <p className="header__email">Email</p>}
        <button className="header__button" type="button">
          {isLoggedIn ? 'Выйти' : 'Войти'}
        </button>
      </div>
    </header>
  )
}

export default Header;
