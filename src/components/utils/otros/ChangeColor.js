const ChangeColor = ({handleDarkMode, isdarkMode}) =>{
    const handleChangeColor = () =>{
        handleDarkMode(isdarkMode);
    };
return(
    <div onClick={handleChangeColor} className={"header-" + isdarkMode() + "__div"}>
        <div>
      <small className={"header-" + isdarkMode() + "__div--change"}><i className="fas fa-circle icon"></i></small>
        </div>
    </div>
)
};

export default ChangeColor;