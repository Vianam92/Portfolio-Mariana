import '../styles/Work.scss';
import '../styles/Variables.scss';
import anonimus from '../images/Anonimus-proxy.png';
import spotify from '../images/Spotify.png';
import fantasticas from "../images/collage_4Fantasticas.jpg";
import animeSearch from "../images/search-anime.png" ;
import juegoPPT from '../images/juego-piedra-papel-tijeras.png';
import SectionsWork from './SectionsWork';

const Work = () => {
    return (
    <section className="project" id="projects">
        <h2 className="project__title">Mis Proyectos</h2>
        <SectionsWork name="Anonimus" image={anonimus} alt="anonimus" LinkGitHub="https://github.com/Vianam92/Anonimus-Proxy" LinkPage="https://vianam92.github.io/Anonimus-Proxy/"/>

        <SectionsWork name="Página Spotify" image={spotify} alt="spotify" LinkGitHub="https://github.com/Vianam92/spotify" LinkPage="https://vianam92.github.io/spotify/"/>

        <SectionsWork name="Proyecto de Equipo" image={fantasticas} alt="spotify" LinkGitHub="https://github.com/Vianam92/project-promo-o-module-1-team-8" LinkPage="https://beta.adalab.es/project-promo-o-module-1-team-8/" />

        <SectionsWork name="Buscador de Series Anime" image={animeSearch} alt="search-Anime" LinkGitHub="http://github.com/Vianam92/modulo-2-evaluacion-final-Vianam92/" LinkPage="https://beta.adalab.es/modulo-2-evaluacion-final-Vianam92/"/>

        <SectionsWork name="Juego-Piedra-Papel-Tijeras" image={juegoPPT} alt="search-Anime" LinkGitHub="https://github.com/Vianam92/juego-piedra-papel-tijeras" LinkPage="https://vianam92.github.io/juego-piedra-papel-tijeras/"/>

        

        {/*Agregarlo como pequeños ejercicios
        <section className="project__section">
            <h4 className="project__section--title">Tu peso en Marte/Júpiter</h4>
            <img src="../images/juego-tu-peso.png" alt="Tu peso" className="project__section--image"
                title="Si tienes curiosidad cuanto pesas en marte o en jupiter esta es tu oportunidad de averiguarlo."/>
            <div className="link-projects">
                <a href="https://github.com/Vianam92/Tu_peso_en_Marte_Jupiter" className="link-projects__icon"
                    title="Repositorio" rel="noreferrer"><i className="fab fa-github-alt" target="_blank"></i></a>
                <a href="https://vianam92.github.io/Tu_peso_en_Marte_Jupiter/" className="link-projects__demo" title="Demo"
                    target="_blank" rel="noreferrer"><i className="fa fa-link"></i></a>
            </div>
    
            <div className="project__section--tecnolog">
                <div><img src="../images/html5.png" alt="html" className="img"/>
                    <img src="../images/css.png" alt="css" className="img"/>
                    <img src="../images/js.jpeg" alt="javascript" className="img"/>
                </div>
            </div>
        </section>
        <section className="project__section">
            <h4 className="project__section--title">Bingo Game</h4>
            <img src="../images/game_bingo.png" alt="bingo Game" className="project__section--image"
                title="Ejercicio extra aplicando lo aprendido de Javascript"/>
            <div className="link-projects">
                <a href="https://github.com/Vianam92/juego-bingo" className="link-projects__icon" title="Repositorio"
                    target="_blank" rel="noreferrer"><i className="fab fa-github-alt" rel="noreferrer"></i></a>
                <a href="https://vianam92.github.io/juego-bingo/" className="link-projects__demo" title="Demo"
                    target="_blank" rel="noreferrer"><i className="fa fa-link"></i></a>
            </div>
    
            <div className="project__section--tecnolog">
                <div><img src="../images/html5.png" alt="html" className="img"/>
                    <img src="../images/css.png" alt="css" className="img"/>
                    <img src="../images/js.jpeg" alt="javascript" className="img" />
                </div>
            </div>
        </section>
        {/*<section className="project__section">
            <h4>B</h4>
            <img src="./assets/images/paddles.png" alt="paddles" className="project__section--image">
            <div className="link-projects"
                title="Proyecto basado en que el usuario pueda buscar las paletas de colores, marcar/desmarcar favoritas o no.">
                <a href="https://github.com/Vianam92/paddles" className="link-projects__icon" title="Repositorio"
                    target="_blank"><i className="fab fa-github-alt"></i></a>
                <a href="https://vianam92.github.io/paddles/" className="link-projects__demo" title="Demo" target="_blank"><i
                        className="fa fa-link"></i></a>
            </div>
    
            <div className="project__section--tecnolog">
                <div><img src="./assets/images/html5.png" alt="html" className="img">
                    <img src="./assets/images/css.png" alt="css" className="img">
                    <img src="./assets/images/js.jpeg" alt="javascript" className="img">
                </div>
            </div>
        </section>*/}
    </section> 
    )
};

export default Work;