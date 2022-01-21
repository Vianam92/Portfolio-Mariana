import '../styles/Footer.scss';
import '../styles/Variables.scss';
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <a href="/." className="footer__arrows">
        <i className="fa fa-arrow-up footer__arrows--img"></i>
      </a>

      <h5 className="footer__feadback">
        Si quereís contactar conmigo ya sea para darme feadback sobre mis
        proyectos o si creeis que aportare valor a su equipo, que asi será,
        podeis contactar conmigo a traves de:
      </h5>
      <nav>
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
      </nav>
      <p className="footer__made">
        <code>Made by Mariana </code>
        <span className="footer__made--heart">❤</span>
      </p>
    </footer>
  );
};

export default Footer;
