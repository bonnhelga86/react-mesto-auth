import React from 'react';

function SignForm({ submitButtonName }) {
  const[email, setEmail] = React.useState('');
  const[password, setPassword] = React.useState('');

  React.useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
    // onAddPlace(name, link);
  }

  return(
    <form
      className="form sign__form"
      onSubmit={handleSubmit}
      name="sign-form"
      noValidate
    >
      <input
        name="sign-email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="Email"
        className="form__input sign__input"
        required
      />
      <span className="form__text-error form__text-error_type_sign-email" />
      <input
        name="sign-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Пароль"
        className="form__input sign__input"
        required
      />
      <span className="form__text-error form__text-error_type_sign-password" />
      <button className="sign__button popup__button">{submitButtonName}</button>

    </form>
  )
}

export default SignForm;
