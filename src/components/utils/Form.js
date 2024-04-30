import translateESContain from "../../services/es/translateES.json";
import translateENContain from "../../services/en/translateEN.json";

const Form = ({
  handleSubmit,
  input,
  isdarkMode,
  translate,
  textarea,
  handleTextarea,
}) => {

  const handleSubmitEvent = (eve) => {
    handleSubmit(eve.target.value);
  };

  const handleSubmitTextarea = (eve) => {
    handleTextarea(eve.target.value);
  };

  const titleEN = translateENContain.form;
  const titleES = translateESContain.form;

  return (
    <section className={`footer-${isdarkMode()}__contact`}>
      <p className={`footer-${isdarkMode()}__contact--text`}>
        {translate ? titleEN.message : titleES.message}
      </p>
      <form
        action="https://formspree.io/f/mnqwdjdw"
        method="post"
        className={`form-${isdarkMode()}`}
      >
        <label to="">
          <i className="fas fa-user icon"></i>
          <input
            className={`form-${isdarkMode()}__input`}
            type="text"
            name="name"
            placeholder={translate ? "Name" : "Nombre"}
            autoComplete="off"
            onChange={handleSubmitEvent}
            value={input}
          />
        </label>
        <textarea
          cols="20"
          rows="5"
          className={`form-${isdarkMode()}__textarea`}
          placeholder={
            translate ? "Leave me a little message" : "Enviame un mensajito"
          }
          value={textarea}
          onChange={handleSubmitTextarea}
        />
        <input
          type="submit"
          className={`form-${isdarkMode()}__btn ${input.length && textarea.length > 0 ? "" : "disable"}`}
          value={translate ? "Send" : "Enviar"}
          disabled={input.length || textarea.length === 0 ? true : false}
        />
      </form>
    </section>
  );
};

export default Form;
