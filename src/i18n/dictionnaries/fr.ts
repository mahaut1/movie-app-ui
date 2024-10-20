import { en } from "./en";

export const fr: typeof en = {
  translation: {
    error: {
      defaultMessage: 'Une erreur est survenue, veuillez réessayer plus tard',
    },
    navBar: {
      home: 'Accueil',
      movies: 'Films',
    },
    header: {
      title: "Mon application de films",
      description: "Recherchez et parcourez les films de la base de données TMDB",
    },
    movies: {
      page: "Films",
      searchBar: {
        placeholder: "Rechercher des films...",
      }
      ,
      table: {
        id: "ID",
        title: "Titre",
        voteAverage: "Note moyenne",
        voteCount: "Nombre de votes",
        popularity: "Popularité",
        releaseDate: "Date de sortie",
      }
  
    },
    movie: {
      card: {
      releaseDate: "Date de sortie",
      originalTitle: "Titre original",
      originalLanguage: "Langue originale",
      popularity: "Popularité",
      voteAverage: "Évaluation",
      voteCount: "Votes",
      },
      error: {
      notFound: "Film non trouvé",
      },
      },
    
  },
};
