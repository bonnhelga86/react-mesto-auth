function SignForm({ submitButtonName }) {
  return(
    <form
      className="form sign__form"
      name="sign-form"
      noValidate
    >
      <input
        name="sign-email"
        // value={name}
        // onChange={(event) => setName(event.target.value)}
        type="email"
        placeholder="Email"
        className="form__input sign__input"
        required
      />
      <span className="form__text-error form__text-error_type_sign-email" />
      <input
        name="sign-password"
        // value={name}
        // onChange={(event) => setName(event.target.value)}
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
