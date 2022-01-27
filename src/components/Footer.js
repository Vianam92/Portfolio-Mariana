import '../styles/Footer.scss';
import '../styles/Variables.scss';
import Links from './Links';
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <h5 className="footer__feadback">
        Si quereís contactar conmigo ya sea para darme feadback sobre mis
        proyectos o si creeis que aportare valor a su equipo, que asi será,
        podeís contactar conmigo a través de:
      </h5>
      <nav>
        <Links/>
      </nav>
      <p className="footer__made">
        <code>Made by Mariana </code>
        <span className="footer__made--heart">❤</span>
      </p>
    </footer>
  );
};

export default Footer;
