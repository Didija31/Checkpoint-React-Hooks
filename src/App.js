import "./App.css";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      name: "Addicted",
      posterurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nO4kJLKwecj0lJcr-xNjmCm2JNvAS3wXSaCNByijEuZtnat5",
      description:
        "Zoe Reynard est une business woman qui a tout pour être heureuse : un époux merveilleux et aimant, deux beaux enfants et une carrière palpitante. Cependant, derrière ce mur de perfection se cache un secret : Zoe est nymphomane. Son besoin constant de satisfaction sexuelle la pousse à mener une double vie qui risque de mettre en péril sa famille.",
      rating: 5,
    },
    {
      id: 2,

      name: "Blood And Water",
      posterurl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAcPc_oVJazElsm0OEwK210u0gx5x3HqDz9SnXzrnxruyk91hm",
      description:
        "Le Cap, Afrique du Sud. Puleng Khumalo, une jeune adolescente, croise le chemin d'une lycéenne fortunée prénommée Fikile Bhele, et se persuade qu'il s'agit de sa s?ur aînée, enlevée à la naissance il y a dix-sept ans. Bien décidée à faire la lumière sur ce drame familial, Puleng va jusqu'à intégrer le même lycée prestigieux pour mener sa propre enquête.",
      rating: 4,
    },
    {
      id: 3,

      name: "Dévoré Par Les Flammes",
      posterurl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkwoxvpP6-NmXarpwP7BWqFt_Jl9BIfcZAfG2zdocdiQx-E1zp",
      description:
        "Les restes carbonisés de Pedro, un policier, sont retrouvés dans une voiture incendiée. Cette découverte déclenche une enquête sur un réseau de relations toxiques, de violences et de scandales sexuels impliquant Pedro et deux autres agents.",
      rating: 2,
    },
    {
      id: 4,

      name: "The Black Book",
      posterurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFtwURUJFxS3Yq_lEYJGHy2VjHfC2x3C6-AExA0JlatcqZ2kt",
      description:
        "Après que son fils a été accusé d'un enlèvement, un diacre endeuillé décide de faire justice lui-même et de se battre contre un gang de policiers corrompus dans le but de l'absoudre.",
      rating: 3,
    },
    {
      id: 5,

      name: "Miseducation",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BZjJhNDEzYjItYTI0NS00MjU1LTg3ZGMtYzZjNDlhZDVlYjhmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
      description:
        " Fraîchement débarqués à la fac et bombardés de défis inédits à relever, Mbali Hadebe et sa nouvelle clique hétéroclite essaient de surmonter les difficultés qui attendent les jeunes adultes, tout en découvrant qui ils veulent être et comment ils veulent être perçus.",
      rating: 5,
    },
    {
      id: 6,

      name: "Pas Si Folle",
      posterurl: "https://imgsrc.cineserie.com/2018/04/1188728.jpg?ver=1",
      description:
        "Une femme, qui vient de sortir de prison, retrouve sa soeur. Elle apprend que cette dernière discute avec une homme par l'intermédiaire d'une application.",
      rating: 1,
    },
    {
      id: 7,

      name: "Elite",
      posterurl:
        "https://georgeapp137.files.wordpress.com/2018/11/elite.jpg?w=640",
      description:
        "Quand trois adolescents de la classe moyenne se retrouvent admis dans une prestigieuse école privée d'Espagne, les tensions entre eux et les élèves dégénèrent rapidement et se finissent en un meurtre.        ",
      rating: 5,
    },
    {
      id: 8,

      name: "How It Ends",
      posterurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkkNW3oqwUWfSm0CwgGlRY9vKikWqQrGfeWRKL4XFlZm74yBh",
      description:
        "Will veut rentrer chez lui où l'attend sa femme enceinte Samantha. Mais les circonstances ne sont pas faciles dans un monde qui sombre dans le chaos. Après tout, son père et ex-soldat Tom, qui n'aime pas vraiment Will, est aussi son compagnon.        ",
      rating: 2,
    },
  ]);
  let addNewMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddMovie myMovie={addNewMovie} />
      </header>
      <div>
        <MovieList movie={movie} />
      </div>
    </div>
  );
}

export default App;
