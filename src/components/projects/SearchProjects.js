const SearchProjects = ({
  handleClickTeam,
}) => {
  const handleTeam = (ev) => {
    handleClickTeam(ev.target.value);
  };
  return (
    <form onSubmit={(ev)=> ev.preventDefault()}>
     <input type="button" value="Equipo" onClick={handleTeam}/>
     <input type="button" value="Javascript" onClick={handleTeam}/>
     <input type="button" value="ReactJS" onClick={handleTeam}/>
     <input type="button" value="Personal" onClick={handleTeam}/>
    </form>
  );
};

export default SearchProjects;
