import { api } from "../services/api";

const fetchGenres = () => {
    return api.get<GenreProps[]>('genres');
}

const fetchGenresById = (id: number) => {
    return api.get<GenreProps>(`genres/${id}`);
}

export {
    fetchGenres,
    fetchGenresById
}