import "../styles/Scroll.scss";

const Scroll = () =>{
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClick = () => {
    scrollToTop();
  };
    return (
      <div className="container" onClick={handleClick}> 
        <i className="fa fa-arrow-up container__img"></i></div>
       
    )
};

export default Scroll;