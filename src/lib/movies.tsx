import { api } from "../services/api";

const fetchMoviesByGenreId = (id: number) => {
    return api.get<MovieProps[]>(`movies/?Genre_id=${id}`);
}

export {
    fetchMoviesByGenreId
}