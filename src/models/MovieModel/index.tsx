import {z} from "zod";
import { MovieDto } from "../../service/api/tmdb/dto";
import { container } from "tsyringe";
import { TmdbApiService } from "../../service/api/tmdb";

export class MovieModel {
    private static readonly schema = z.object({
        id: z.number(),
        originalLanguage: z.string(),
        originalTitle: z.string(),
        overview: z.string(),
        popularity: z.number(),
        posterPath: z.string().nullable(),
        releaseDate: z.date(),
        title: z.string(),
        voteAverage: z.number(),
        voteCount: z.number(),
        });
        public constructor(
        public readonly id: number,
        public readonly originalLanguage: string,
        public readonly originalTitle: string,
        public readonly overview: string,
        public readonly popularity: number,
        public readonly posterPath: string | null,
        public readonly releaseDate: Date,
        public readonly title: string,
        public readonly voteAverage: number,
        public readonly voteCount: number
        ) {}
        // Static method to convert a DTO to the MovieModel
        public static fromDto(dto: MovieDto): MovieModel {
          console.log("DTO Received:", dto);
        return new MovieModel(
        dto.id,
        dto.original_language,
        dto.original_title,
        dto.overview,
        dto.popularity,
        dto.poster_path ? dto.poster_path : null, // Handle nul
        dto.release_date,
        dto.title,
        dto.vote_average,
        dto.vote_count
        );
        console.log("MovieModel Created:", MovieModel);

        }
        // Static method to validate the object and return a MovieM
        public static validate(obj: unknown): MovieModel {
          console.log("Object to validate:", obj);
        const movie = this.schema.parse(obj);
        console.log("Validated Movie:", movie);
        return new MovieModel(
            movie.id,
            movie.originalLanguage,
            movie.originalTitle,
            movie.overview,
            movie.popularity,
            movie.posterPath,
            movie.releaseDate,
            movie.title,
            movie.voteAverage,
            movie.voteCount
            );
            }
            // Format the release date based on the locale
            public getFormattedReleaseDate(lang: string): string {
            return this.releaseDate.toLocaleDateString(lang);
            }
               

            public static readonly fallbackImageUrl = `/images/movie-fallback.png`;

            public getPosterUrl(): string {
              console.log("Poster path:", this.posterPath);
              if (!this.posterPath)  return MovieModel.fallbackImageUrl;
              console.log("Using fallback image");
              const isPathStartingWithSlash = this.posterPath?.startsWith("/");
              const pathWithoutStartingSlash = isPathStartingWithSlash
                ? this.posterPath.substring(1)
                : this.posterPath;
              return `${
                container.resolve(TmdbApiService).imageUrlBase
              }/${pathWithoutStartingSlash}`;
            }
          }