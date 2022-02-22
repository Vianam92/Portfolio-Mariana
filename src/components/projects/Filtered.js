const Filtered = ({handleSearch , filterTecnologies}) => {
    const handleSearchTec = ev =>{
        handleSearch({
            key:"tecnologies",
            value:ev.target.value,
        });
    };
  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <label htmlFor="tecnologies">Filtra por tecnología</label>
      <select id="tecnologies" name="filter" value={filterTecnologies} onChange={handleSearchTec}>
        <option value="all">todos</option>
        <option value="html">html</option>
        <option value="js">js</option>
        <option value="react">react</option>
        <option value="sql">sql</option>
      </select>
    </form>
  );
};

export default Filtered;
