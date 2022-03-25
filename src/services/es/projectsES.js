import anonimus from "../../images/proyectos/Anonimus-proxy.png";
import spotify from "../../images/proyectos/Spotify.png";
import fantasticas from "../../images/proyectos/collage_4Fantasticas.jpg";
import tarjetas from "../../images/proyectos/generador-tarjetas-2.png";
import tarjetas3 from "../../images/proyectos/generador-de-tarjetas-3.png";
import dreadFul from "../../images/proyectos/Dreadful Tomato - HOME.png";
import animeSearch from "../../images/proyectos/search-anime.png";
import juegoPPT from "../../images/proyectos/juego-piedra-papel-tijeras.png";
import peso from "../../images/proyectos/juego-tu-peso.png";
import rick from "../../images/proyectos/rick.jpg";
import bingo from "../../images/proyectos/game_bingo.png";
import harry from "../../images/proyectos/howart.png";
import git from "../../images/proyectos/git.png";
import hagman from "../../images/proyectos/hagman.png";
import pomodoro from "../../images/proyectos/pomodoro.png";
import tareas from "../../images/proyectos/tareas.png";

const projects = [
  {
    key: ["ReactJS", "Todos"],
    name: "DreadFul Tomato",
    images: dreadFul,
    alt: "Reto Rwiewer",
    LinkGitHub:
      "https://github.com/Vianam92/DreadFul-Tomato",
    LinkPage: "https://vianam92.github.io/DreadFul-Tomato/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
      "fab fa-react icon",
      "fab fa-node icon",
    ],
    description:
      "Construye una aplicación web que permita a los usuarios ver y valorar las últimas películas más taquilleras.",
  },
  {
    key: ["ReactJS", "Todos"],
    name: "Buscador de Personajes de Rick y Morty",
    images: rick,
    alt: "search-characters",
    LinkGitHub:
      "https://github.com/Vianam92/Buscador--personajes-Rick-and-Morty",
    LinkPage: "https://vianam92.github.io/Buscador--personajes-Rick-and-Morty/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
      "fab fa-react icon",
      "fab fa-node icon",
    ],
    description:
      "Consistió en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje,especie y status. Además si haces click en el personaje podrás conocer más sobre él.",
  },
  {
    key: ["ReactJS", "Todos"],
    name: "Buscador de Personajes de Harry Potter",
    alt: "search-characters",
    images: harry,
    LinkGitHub: "https://github.com/Vianam92/search-character-Harry-Potter",
    LinkPage: "https://vianam92.github.io/search-character-Harry-Potter/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
      "fab fa-react icon",
      "fab fa-node icon",
    ],
    description:
      "Consistió en desarrollar una página web con un listado de personajes de Harry Potter, que podemos filtrar por el nombre del personaje y por Casa. Además si haces click en el personaje podrás conocer más sobre él.",
  },
  {
    key: ["Javascript", "Todos"],
    name: "Buscador de Series Anime",
    alt: "search-Anime",
    images: animeSearch,
    LinkGitHub: "https://github.com/Vianam92/movies-anime-search",
    LinkPage: "https://vianam92.github.io/movies-anime-search/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
    ],
    description:
      "Buscador de Series Anime, se solicita la información de una Api, y el usuari@ puede interactuar marcando/desmarcando sus series favoritas.",
  },
  {
    key: ["ReactJS", "Todos"],
    name: "Hangman Game",
    alt: "hagman",
    images: hagman,
    LinkGitHub: "https://github.com/Vianam92/hangman-game/",
    LinkPage: "https://vianam92.github.io/hangman-game/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
      "fab fa-react icon",
      "fab fa-node icon",
    ],
    description:
      "Juego realizado durante el PairPrograming aplicando funcionalidades con ReactJS. Adapte el proyecto a responsive.",
  },
  {
    key: ["Javascript", "Todos"],
    name: "Bingo",
    alt: "Bingo Game",
    images: bingo,
    LinkGitHub: "https://github.com/Vianam92/juego-bingo",
    LinkPage: "https://vianam92.github.io/juego-bingo/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
    ],
    description:
      "Al pulsar el botón 'Saca una bolita' se genera y muestra un nuevo número aleatorio en la parte Bolitas. Si se pulsa una vez el botón de play ► se generará una bolita nueva cada un segundo. Cuando hayan aparecido todas las bolitas de los números de nuestro cartón se muestra el mensaje 'Han cantado bingo!!!' y se ocultan los botones de 'Saca una bolita' y Play.",
  },
  {
    key: ["Javascript", "Todos"],
    name: "Juego-Piedra-Papel-Tijeras",
    alt: "search-Anime",
    images: juegoPPT,
    LinkGitHub: "https://github.com/Vianam92/juego-piedra-papel-tijeras",
    LinkPage: "https://vianam92.github.io/juego-piedra-papel-tijeras/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
    ],
    description:
      "En el juego ambos jugadores tienen que hacer una piedra, papel o tijeras. Solo tiene dos resultados posibles: un empate o una victoria para un jugador y una derrota para el otro jugador.",
  },
  {
    key: ["Maquetación", "Todos"],
    name: "Anonimus",
    alt: "anonimus",
    images: anonimus,
    LinkGitHub: "https://github.com/Vianam92/Anonimus-Proxy",
    LinkPage: "https://vianam92.github.io/Anonimus-Proxy/",
    text: ["fab fa-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description: "Página web donde realice la maquetación desde 0.",
  },
  {
    key: ["Maquetación", "Todos"],
    name: "Página Spotify",
    alt: "spotify",
    images: spotify,
    LinkGitHub: "https://github.com/Vianam92/page-Spotify",
    LinkPage: "https://vianam92.github.io/page-Spotify/",
    text: ["fab fa-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description: "Maquetación de la página web de spotify",
  },
  {
    key: ["Equipo", "Maquetación", "Todos"],
    name: "Proyecto de Equipo Módulo 1",
    alt: "4 fantáticas",
    images: fantasticas,
    LinkGitHub: "https://github.com/Vianam92/project-promo-o-module-1-Equipo-8",
    LinkPage: "https://beta.adalab.es/project-promo-o-module-1-Equipo-8/",
    text: ["fab fa-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description:
      "Proyecto de Equipo que consistio en realizar una página web desde 0 para darnos a conocer como programadoras.",
  },
  {
    key: ["Mini-Proyectos", "Javascript", "Todos"],
    name: "Tu peso en Marte/Júpiter",
    alt: "tu peso en Marte/Jupiter",
    images: peso,
    LinkGitHub: "https://github.com/Vianam92/Tu_peso_en_Marte_Jupiter",
    LinkPage: "https://vianam92.github.io/Tu_peso_en_Marte_Jupiter/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
    ],
    description:
      "Si tienes curiosidad cuanto pesas en marte o en jupiter esta es tu oportunidad de averiguarlo.",
  },
  {
    key: ["Mini-Proyectos", "Javascript", "Todos"],
    name: "Get Token from GitHub",
    alt: "token image",
    images: git,
    LinkGitHub: "https://github.com/Vianam92/js-api-github",
    LinkPage: "https://vianam92.github.io/js-api-github/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
    ],
    description:
      "Nuestra aplicación consta de un campo donde escribir el nick de un usuaria de la plataforma de GitHub.",
  },
  {
    key: ["Mini-Proyectos", "Javascript", "Todos"],
    name: "Pomodoro",
    alt: "Pomodoro",
    images: pomodoro,
    LinkGitHub: "https://github.com/Vianam92/Pomodoro",
    LinkPage: "https://vianam92.github.io/Pomodoro/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
    ],
    description:
      "La Técnica Pomodoro es un método para mejorar la administración del tiempo dedicado a una actividad.",
  },
  {
    key: ["Mini-Proyectos", "Javascript", "Todos"],
    name: "Lista de Tareas",
    alt: "Lista de Tareas",
    images: tareas,
    LinkGitHub: "https://github.com/Vianam92/Calendario-de-Eventos",
    LinkPage: "https://vianam92.github.io/Calendario-de-Eventos/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
    ],
    description:
      "Este es un Calendario de Eventos realizado con Javascript",
  },
  {
    key: ["Equipo","Javascript", "Todos"],
    name: "Proyecto de Equipo Módulo 2",
    alt: "Generador de Tarjetas",
    images: tarjetas,
    LinkGitHub:
      "https://github.com/Vianam92/Generador-de-Tarjetas-Interactivas-con-Javascript",
    LinkPage: "http://beta.adalab.es/project-promo-o-module-2-team-2/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
    ],
    description:
      "En este proyecto realizamos una aplicación web que nos permite crear una tarjeta de visita personalizada. En la página web podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información.",
  },
  {
    key: ["Equipo", "ReactJS", "Todos"],
    name: "Proyecto de Equipo Módulo 3",
    alt: "Código Heredado migrado a React",
    images: tarjetas3,
    LinkGitHub:
      "https://github.com/Vianam92/Generador-de-Tarjetas-Interactivas-con-Javascript",
    LinkPage: "http://beta.adalab.es/project-promo-o-module-2-team-2/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
      "fab fa-react icon",
      "fab fa-node icon",
    ],
    description:
      "En este proyecto hemos trabajado con un caso muy típico que se suele producir en el mundo de la programación, un trabajo que nos viene dado, con código heredado, es decir escrito por otra persona y sobre el que tenemos que trabajar y migrarlo a React.",
  },
];

export default projects;
