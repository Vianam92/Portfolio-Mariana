const Form = ({ handleSubmit, input ,isdarkMode}) => {
  const handleSubmitEvent = (eve) => {
    handleSubmit(eve.target.value);
  };

  return (
    <section className={`footer-${isdarkMode()}__contact`}>
      <p className={`footer-${isdarkMode()}__contact--text`}>
        Si quieres ponerte en contacto conmigo, hablar sobre un proyecto de
        colaboración o simplemente decir hola, complete el increíble formulario
        a continuación o envíe un correo a mi link de email y ~hablemos.
      </p>
      <form action="" method="post" className={`form-${isdarkMode()}`}>
      <i className="fas fa-user icon"></i><input
        className={`form-${isdarkMode()}__input`}
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="off"
          onChange={handleSubmitEvent}
          value={input}
        />
        <textarea cols="20" rows="5" className={`form-${isdarkMode()}__textarea`}/>
        <input type="submit" className={`form-${isdarkMode()}__btn`}/>
      </form>
    </section>
  );
};

export default Form;
