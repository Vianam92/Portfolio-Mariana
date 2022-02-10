import "../../styles/Work.scss";
import "../../styles/Variables.scss";
//images
import anonimus from "../../images/proyectos/Anonimus-proxy.png";
import spotify from "../../images/proyectos/Spotify.png";
import fantasticas from "../../images/proyectos/collage_4Fantasticas.jpg";
import animeSearch from "../../images/proyectos/search-anime.png";
import juegoPPT from "../../images/proyectos/juego-piedra-papel-tijeras.png";
import peso from "../../images/proyectos/juego-tu-peso.png";
import rick from "../../images/proyectos/rick.jpg";
import bingo from "../../images/proyectos/game_bingo.png";
import harry from "../../images/proyectos/howart.png";
import git from "../../images/proyectos/git.png";
import hagman from "../../images/proyectos/hagman.png";

import SectionsWork from "./SectionsWork";
//import Scroll from "../../Scroll";
import Button from "../utils/Button";

const Work = () => {
  return (
    <>
      <Button />
      <section className="project">
        <div className="project__div">
          <h2 className="project__div--title">Mis Proyectos</h2>
        </div>
        <article className="project__article">
          <SectionsWork
            name="Buscador de Personajes de Rick y Morty"
            image={rick}
            alt="search-characters"
            LinkGitHub="https://github.com/Vianam92/Buscador--personajes-Rick-and-Morty"
            LinkPage="https://vianam92.github.io/Buscador--personajes-Rick-and-Morty/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            npm="fab fa-npm icon"
            js="fab fa-js-square icon"
            react="uil uil-react icon"
            node="fab fa-node icon"
            description="Consistió en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje,especie y status. Además si haces click en el personaje podrás conocer más sobre él."
          />
          <SectionsWork
            name="Buscador de Personajes de Harry Potter"
            image={harry}
            alt="search-characters"
            LinkGitHub="https://github.com/Vianam92/search-character-Harry-Potter"
            LinkPage="http://beta.adalab.es/modulo-3-evaluacion-final-Vianam92/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            npm="fab fa-npm icon"
            js="fab fa-js-square icon"
            react="uil uil-react icon"
            node="fab fa-node icon"
            description="Consistió en desarrollar una página web con un listado de personajes de Harry Potter, que podemos filtrar por el nombre del personaje y por Casa. Además si haces click en el personaje podrás conocer más sobre él."
          />
          <SectionsWork
            name="Buscador de Series Anime"
            image={animeSearch}
            alt="search-Anime"
            LinkGitHub="http://github.com/Vianam92/modulo-2-evaluacion-final-Vianam92/"
            LinkPage="https://beta.adalab.es/modulo-2-evaluacion-final-Vianam92/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            npm="fab fa-npm icon"
            js="fab fa-js-square icon"
            description="Buscador de Series Anime, se solicita la información de una Api, y el usuari@ puede interactuar marcando/desmarcando sus series favoritas."
          />
          <SectionsWork
            name="Hangman Game"
            image={hagman}
            alt="hagman"
            LinkGitHub="https://github.com/Vianam92/hangman-game/"
            LinkPage="https://vianam92.github.io/hangman-game/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            js="fab fa-js-square icon"
            react="uil uil-react icon"
            node="fab fa-node icon"
            description="Juego realizado durante el pairPrograming aplicando funcionalidades con React. Adapte el proyecto a responsive."
          />
          <SectionsWork
            name="Bingo"
            image={bingo}
            alt="Bingo Game"
            LinkGitHub="https://github.com/Vianam92/juego-bingo"
            LinkPage="https://vianam92.github.io/juego-bingo/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            npm="fab fa-npm icon"
            js="fab fa-js-square icon"
            description="Al pulsar el botón 'Saca una bolita' se genera y muestra un nuevo número aleatorio en la parte Bolitas. Si se pulsa una vez el botón de play ► se generará una bolita nueva cada un segundo. Cuando hayan aparecido todas las bolitas de los números de nuestro cartón se muestra el mensaje 'Han cantado bingo!!!' y se ocultan los botones de 'Saca una bolita' y Play."
          />
          <SectionsWork
            name="Juego-Piedra-Papel-Tijeras"
            image={juegoPPT}
            alt="search-Anime"
            LinkGitHub="https://github.com/Vianam92/juego-piedra-papel-tijeras"
            LinkPage="https://vianam92.github.io/juego-piedra-papel-tijeras/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            npm="fab fa-npm icon"
            js="fab fa-js-square icon"
            description="En el juego ambos jugadores tienen que hacer una piedra, papel o tijeras. Solo tiene dos resultados posibles: un empate o una victoria para un jugador y una derrota para el otro jugador."
          />
          <SectionsWork
            name="Anonimus"
            image={anonimus}
            alt="anonimus"
            LinkGitHub="https://github.com/Vianam92/Anonimus-Proxy"
            LinkPage="https://vianam92.github.io/Anonimus-Proxy/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            description="Página web donde realice la maquetación desde 0."
          />
          <SectionsWork
            name="Página Spotify"
            image={spotify}
            alt="spotify"
            LinkGitHub="https://github.com/Vianam92/page-Spotify"
            LinkPage="https://vianam92.github.io/page-Spotify/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            description="Maquetación de la página web de spotify"
          />
          <SectionsWork
            name="Proyecto de Equipo"
            image={fantasticas}
            alt="spotify"
            LinkGitHub="https://github.com/Vianam92/project-promo-o-module-1-team-8"
            LinkPage="https://beta.adalab.es/project-promo-o-module-1-team-8/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            sass="fab fa-sass icon"
            description="Proyecto de Equipo que consistio en realizar una página web desde 0 para darnos a conocer como programadoras."
          />
          <SectionsWork
            name="Tu peso en Marte/Júpiter"
            image={peso}
            alt="tu peso en Marte/Jupiter"
            LinkGitHub="https://github.com/Vianam92/Tu_peso_en_Marte_Jupiter"
            LinkPage="https://vianam92.github.io/Tu_peso_en_Marte_Jupiter/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            js="fab fa-js-square icon"
            description="Si tienes curiosidad cuanto pesas en marte o en jupiter esta es tu oportunidad de averiguarlo."
          />
          <SectionsWork
            name="Get Token from GitHub"
            image={git}
            alt="token image"
            LinkGitHub="https://github.com/Vianam92/js-api-github"
            LinkPage="https://vianam92.github.io/js-api-github/"
            html="uil uil-html5 icon"
            css="fab fa-css3-alt icon"
            js="fab fa-js-square icon"
            description="Nuestra aplicación consta de un campo donde escribir el nick de un usuaria de la plataforma de GitHub."
          />
        </article>
        {/*<Scroll/>*/}
      </section>
    </>
  );
};

export default Work;
