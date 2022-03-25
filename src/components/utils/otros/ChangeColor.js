const ChangeColor = ({ handleDarkMode, isdarkMode }) => {
  const handleChangeColor = () => {
    handleDarkMode(isdarkMode);
  };
  return (
    <div className="section-onOff">
      <p className="section-onOff__p">dark</p>
      <div
        onClick={handleChangeColor}
        className={"header-" + isdarkMode() + "__div"}
      >
        <div>
          <small className={"header-" + isdarkMode() + "__div--change"}>
            <i className="fas fa-circle icon"></i>
          </small>
        </div>
      </div>
      <p className="section-onOff__p">light</p>
    </div>
  );
};

export default ChangeColor;
