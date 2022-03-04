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

const projects = [
  {
    name: "Search Character Rick and Morty",
    images: rick,
    alt: "search-characters",
    LinkGitHub:
      "https://github.com/Vianam92/Buscador--personajes-Rick-and-Morty",
    LinkPage: "https://vianam92.github.io/Buscador--personajes-Rick-and-Morty/",
    text: [
      "uil uil-html5 icon",
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
    name: "Search character Harry Potter",
    alt: "search-characters",
    images:harry,
    LinkGitHub: "https://github.com/Vianam92/search-character-Harry-Potter",
    LinkPage: "https://vianam92.github.io/search-character-Harry-Potter/",
    text: [
      "uil uil-html5 icon",
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
    name: "Search for anime series",
    alt: "search-Anime",
    images:animeSearch,
    LinkGitHub:
      "https://github.com/Vianam92/movies-anime-search",
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
    name: "Hangman Game",
    alt: "hagman",
    images:hagman,
    LinkGitHub: "https://github.com/Vianam92/hangman-game/",
    LinkPage: "https://vianam92.github.io/hangman-game/",
    text: [
      "uil uil-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
      "uil uil-react icon",
      "fab fa-node icon",
    ],
    description:
      "Game made during the pairProgramming applying functionalities with React. Adapt the project to responsive.",
  },
  {
    name: "Bingo",
    alt: "Bingo Game",
    images:bingo,
    LinkGitHub: "https://github.com/Vianam92/juego-bingo",
    LinkPage: "https://vianam92.github.io/juego-bingo/",
    text: [
      "uil uil-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
    ],
    description:
      "Pressing the 'Draw a ball' button generates and displays a new random number in the Balls part. Pressing the play button once ► will generate a new ball every one second. When all the balls of the numbers on our card have appeared, the message 'Bingo has been called!!!' is displayed and the 'Draw a ball' and Play buttons are hidden.",
  },
  {
    name: "Game-Rock-Paper-Scissors",
    alt: "search-Anime",
    images:juegoPPT,
    LinkGitHub: "https://github.com/Vianam92/juego-piedra-papel-tijeras",
    LinkPage: "https://vianam92.github.io/juego-piedra-papel-tijeras/",
    text: [
      "uil uil-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-sass icon",
      "fab fa-npm icon",
      "fab fa-js-square icon",
    ],
    description:
      "In the game both players have to make a rock, paper, scissors. It has only two possible outcomes: a draw or a win for one player and a loss for the other player.",
  },
  {
    name: "Anonimus",
    alt: "anonimus",
    images:anonimus,
    LinkGitHub: "https://github.com/Vianam92/Anonimus-Proxy",
    LinkPage: "https://vianam92.github.io/Anonimus-Proxy/",
    text: ["uil uil-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description: "Website where I made the layout from 0.",
  },
  {
    name: "Page Spotify",
    alt: "spotify",
    images:spotify,
    LinkGitHub: "https://github.com/Vianam92/page-Spotify",
    LinkPage: "https://vianam92.github.io/page-Spotify/",
    text: ["uil uil-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description: "Layout of the spotify website.",
  },
  {
    name: "Team Project",
    alt: "4 fantáticas",
    images:fantasticas,
    LinkGitHub: "https://github.com/Vianam92/project-promo-o-module-1-team-8",
    LinkPage: "https://beta.adalab.es/project-promo-o-module-1-team-8/",
    text: ["uil uil-html5 icon", "fab fa-css3-alt icon", "fab fa-sass icon"],
    description:
      "Team project that consisted of making a web page from 0 to make ourselves known as programmers.",
  },
  {
    name: "Your weight on Mars/Jupiter",
    alt: "tu peso en Marte/Jupiter",
    images:peso,
    LinkGitHub: "https://github.com/Vianam92/Tu_peso_en_Marte_Jupiter",
    LinkPage: "https://vianam92.github.io/Tu_peso_en_Marte_Jupiter/",
    text: [
      "uil uil-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
    ],
    description:
      "If you are curious how much you weigh on Mars or Jupiter this is your chance to find out.",
  },
  {
    name: "Get Token from GitHub",
    alt: "token image",
    images:git,
    LinkGitHub: "https://github.com/Vianam92/js-api-github",
    LinkPage: "https://vianam92.github.io/js-api-github/",
    text: [
      "uil uil-html5 icon",
      "fab fa-css3-alt icon",
      "fab fa-js-square icon",
    ],
    description:
      "Our application consists of a field to write the nickname of a user of the GitHub platform.",
  },
];

export default projects;