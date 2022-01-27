import "../styles/Links.scss";

const Links = () =>{
    return (
        <ul className="nav-contact">
          <li className="nav-contact__icons">
            <a
              href="mailto:vianarodriguezm@gmail.com"
              className="nav-contact__icons--link"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="nav-contact__icons">
            <a
              href="https://github.com/Vianam92"
              className="nav-contact__icons--link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </li>
          <li className="nav-contact__icons">
            <a
              href="https://www.linkedin.com/in/mariana-viana-rodriguez-19871a195/"
              className="nav-contact__icons--link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-contact__icons">
            <a
              href="https://twitter.com/vianam92"
              className="nav-contact__icons--link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
    );
};

export default Links;