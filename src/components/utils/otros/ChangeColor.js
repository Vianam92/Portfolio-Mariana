import "../../../styles/Header.scss";
const ChangeColor = ({handleDarkMode, isdarkMode}) =>{
    const handleChangeColor = () =>{
        handleDarkMode(isdarkMode);
    };
return(
    <div onClick={handleChangeColor} className={"header-" + isdarkMode() + "__div"}>
        <div className={"header-" + isdarkMode() + "__div--change"}>
        🎱️
        </div>
    </div>
)
};

export default ChangeColor;