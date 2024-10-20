import { MovieDto, SearchMoviesResponseDto } from "../../service/api/tmdb/dto";
import { MovieModel } from "../MovieModel";

export class SearchMoviesResponseModel {
    public constructor(
    public readonly page: number,
    public readonly results: MovieModel[],
    public readonly totalPages: number,
    public readonly totalResults: number
    ) {}

    public static fromDto(
        dto: SearchMoviesResponseDto
): SearchMoviesResponseModel {
return new SearchMoviesResponseModel(
dto.page,
dto.results.map((movieDto: MovieDto) => MovieModel.fromDto(movieDto)),
dto.total_pages,
dto.total_results
);
}
}