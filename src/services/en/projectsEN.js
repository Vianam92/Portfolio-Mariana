

import podcast from "../../images/proyectos/musicals_podcast.png";
import weather from "../../images/proyectos/weather.png";
import dreadFul from "../../images/proyectos/dreanful.png";

const projects = [
    {
        key: ["ReactJS", "Todos"],
        name: "Musical Podcast",
        images: podcast,
        alt: "Prueba Técnica",
        LinkGitHub: "https://github.com/Vianam92/musicals_podcasts",
        LinkPage: "https://musicals-podcasts.vercel.app/",
        text: [
        ],
        description:
          "Application made with React and typescript. I made use of hooks, proptypes, applied testing to components and services. For the styles I used styled components.",
      },
      {
        key: ["Lit Element", "Todos"],
        name: "Weather App",
        images: weather,
        alt: "Proyecto Final",
        LinkGitHub: "https://github.com/Vianam92/weather-app",
        LinkPage: "https://vianam92.github.io/weather-app/",
        text: [
        ],
        description:
          "Application made as a final project of Generation K. I made use of lit element, web components, I tested the services and cypress to test the flow of the application. It has docker configuration and I make use of pipeline.",
      },
      {
        key: ["ReactJS", "Todos"],
        name: "DreadFul Tomato",
        images: dreadFul,
        alt: "Reto Rwiewer",
        LinkGitHub:
          "https://github.com/Vianam92/DreadFul-Tomato",
        LinkPage: "https://vianam92.github.io/DreadFul-Tomato/",
        text: [
        ],
        description:
          "I made this application with React as a technical challenge in 2022, I currently want to work on improving it.",
      },
];

export default projects;
