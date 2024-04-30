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
      "Aplicación realizada con React y typescript. Hice uso de hooks, proptypes, aplique testing a los componentes y servicios. Para los estilos utilicé styled components.",
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
      "Aplicación realizada como proyecto final de la Generación K. Hice uso de lit element, web components, realice test de los servicios y cypress para probar el flujo de la aplicación. Tiene configuración de docker y hago uso de pipeline.",
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
      "Realice esta aplicación con React como un reto técnico en el 2022, actualmente quiero trabajar en su mejora.",
  },
];

export default projects;
