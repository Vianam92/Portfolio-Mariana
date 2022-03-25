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
    key: ["ReactJS", "All"],
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
      "Build a web app that lets users view and rate the latest blockbuster movies.",
  },
  {
    key: ["ReactJS", "All"],
    name: "Search Character Rick and Morty",
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
      "uil uil-react icon",
      "fab fa-node icon",
    ],
    description:
      "It consisted of developing a web page with a list of Rick and Morty characters, which we can filter by character name, species and status. Also if you click on the character you can learn more about it.",
  },
  {
    key: ["ReactJS", "All"],
    name: "Search character Harry Potter",
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
      "uil uil-react icon",
      "fab fa-node icon",
    ],
    description:
      "It consisted of developing a web page with a list of Harry Potter characters, which we can filter by the character's name and by House. Also if you click on the character you can learn more about it.",
  },
  {
    key: ["Javascript", "All"],
    name: "Search for anime series",
    alt: "search-Anime",
    images: animeSearch,
    LinkGitHub: "https://github.com/Vianam92/movies-anime-search",
    LinkPage: "https://vianam92.github.io/movies-anime-search/",
    text: [
      "uil uil-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
    ],
    description:
      "Anime Series Finder, the information of an Api is requested, and the user can interact by marking/unmarking their favorite series.",
  },
  {
    key: ["ReactJS", "All"],
    name: "Hangman Game",
    alt: "hagman",
    images: hagman,
    LinkGitHub: "https://github.com/Vianam92/hangman-game/",
    LinkPage: "https://vianam92.github.io/hangman-game/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
      "uil uil-react icon",
      "fab fa-node icon",
    ],
    description:
      "Game made during the pairProgramming applying functionalities with React. Adapt the project to responsive.",
  },
  {
    key: ["Javascript", "All"],
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
      "Pressing the 'Draw a ball' button generates and displays a new random number in the Balls part. Pressing the play button once ► will generate a new ball every one second. When all the balls of the numbers on our card have appeared, the message 'Bingo has been called!!!' is displayed and the 'Draw a ball' and Play buttons are hidden.",
  },
  {
    key: ["Javascript", "All"],
    name: "Game-Rock-Paper-Scissors",
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
      "In the game both players have to make a rock, paper, scissors. It has only two possible outcomes: a draw or a win for one player and a loss for the other player.",
  },
  {
    key: ["Landing", "All"],
    name: "Anonimus",
    alt: "anonimus",
    images: anonimus,
    LinkGitHub: "https://github.com/Vianam92/Anonimus-Proxy",
    LinkPage: "https://vianam92.github.io/Anonimus-Proxy/",
    text: ["fab fa-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description: "Website where I made the layout from 0.",
  },
  {
    key: ["Landing", "All"],
    name: "Page Spotify",
    alt: "spotify",
    images: spotify,
    LinkGitHub: "https://github.com/Vianam92/page-Spotify",
    LinkPage: "https://vianam92.github.io/page-Spotify/",
    text: [ "fab fa-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description: "Layout of the spotify website.",
  },
  {
    key: ["Team","Landing", "All"],
    name: "Team Project Module 1",
    alt: "4 fantáticas",
    images: fantasticas,
    LinkGitHub: "https://github.com/Vianam92/project-promo-o-module-1-team-8",
    LinkPage: "https://beta.adalab.es/project-promo-o-module-1-team-8/",
    text: [ "fab fa-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description:
      "Team project that consisted of making a web page from 0 to make ourselves known as programmers.",
  },
  {
    key: ["Mini-Projects", "Javascript", "All"],
    name: "Your weight on Mars/Jupiter",
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
      "If you are curious how much you weigh on Mars or Jupiter this is your chance to find out.",
  },
  {
    key: ["Mini-Projects", "Javascript", "All"],
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
      "Our application consists of a field to write the nickname of a user of the GitHub platform.",
  },
  {
    key: ["Mini-Projects", "Javascript", "All"],
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
      "The Pomodoro Technique is a method to improve the management of time spent on an activity.",
  },
  {
    key: ["Mini-Projects", "Javascript", "All"],
    name: "Task List",
    alt: "Task List",
    images: tareas,
    LinkGitHub: "https://github.com/Vianam92/Calendario-de-Eventos",
    LinkPage: "https://vianam92.github.io/Calendario-de-Eventos/",
    text: [
      "fab fa-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
    ],
    description:
      "This is an Event Calendar made with Javascript",
  },
  {
    key:["Team", "Javascript", "All"],
    name: "Team Project Module 2",
    alt: "Card Generator",
    images:tarjetas,
    LinkGitHub: "https://github.com/Vianam92/Generador-de-Tarjetas-Interactivas-con-Javascript",
    LinkPage: "http://beta.adalab.es/project-promo-o-module-2-team-2/",
    text: ["fab fa-html5 icon",
    "fab fa-css3-alt icon",
    "fab fa-sass icon",
    "fab fa-npm icon",
    "fab fa-js-square icon",],
    description:
      "In this project we made a web application that allows us to create a personalized business card. In the web page we can enter our professional data and get a layout view with this information.",
  },
  {
    key: ["Team", "React" , "All"],
    name: "Team Project Module 3",
    alt: "Inherited code migrated to React",
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
      "In this project we have worked with a very typical case that usually occurs in the programming world, a job that is given to us, with inherited code, that is to say, code written by someone else and on which we have to work and migrate it to React",
    },
];

export default projects;
