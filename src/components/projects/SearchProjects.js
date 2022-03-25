import "./SearchProjects.scss";

const SearchProjects = ({ handleClickTeam , translate}) => {

  const handleTeam = (ev) => {
    handleClickTeam(ev.target.value);
  };

  return (
    <form onSubmit={(ev) => ev.preventDefault()} className="form">
      <input type="button" id={translate?`Team`:`Equipo`} value={translate?`Team`:`Equipo`} onClick={handleTeam} className="form__input"/>
      <input type="button" id="Javascript" value="Javascript" onClick={handleTeam} className="form__input"/>
      <input type="button" id="ReactJS" value="ReactJS" onClick={handleTeam} className="form__input"/>
      <input type="button" id={translate?`Mini-Projects`:`Mini-Proyectos`} value={translate?`Mini-Projects`:`Mini-Proyectos`} onClick={handleTeam} className="form__input"/>
      <input type="button" id={translate?`Landing`:`Maquetación`} value={translate?`Landing`:`Maquetación`} onClick={handleTeam} className="form__input"/>
      <input type="button" id={translate?`All`:`Todos`} value={translate?`All`:`Todos`} onClick={handleTeam} className="form__input"/>
    </form>
  );
};

export default SearchProjects;
