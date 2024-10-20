import Movie from "../../pages/Movie";

export const en = {
    translation: {
        error: {
            defaultMessage: 'An unexpected error occurred. Please try again later.',
          },
        navBar: {
            home: 'home', // This should have translations for each language
            movies: 'movies',
          },
    header: {
    title: "My movie application",
    description: "Search and browse among movies of TMDB database"
    },
    movies: {
    page: "Movies",
        searchBar: {
        placeholder: "Search for movies...",
        },
        table: {
          id: "ID",
          title: "Title",
          voteAverage: "Vote Average",
          voteCount: "Vote Count",
          popularity: "Popularity",
          releaseDate: "Release Date",
        }
    },
movie:{
    card: {
        releaseDate: "Release Date",
        originalTitle: "Original Title",
        originalLanguage: "Original Language",
        popularity: "Popularity",
        voteAverage: "Vote Average",
        voteCount: "Vote Count",
      },
      error: {
      notFound: "Movie not found",
      },
}
    }
};