import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchGenres, fetchGenresById } from "../lib/genres";
import { fetchMoviesByGenreId } from "../lib/movies";

interface GenresContextProps {
    genres: GenreProps[];
    selectedGenreId: number;
    movies: MovieProps[];
    selectedGenre: GenreProps;
    onSelectGenre: (id: number) => void;
}

export const GenresContext = createContext<GenresContextProps>({
    genres: [],
    selectedGenreId: 1,
    movies: [],
    selectedGenre: {} as GenreProps,
    onSelectGenre: () => { },
});

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {

    const [genres, setGenres] = useState<GenreProps[]>([]);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreProps>({} as GenreProps);
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    // fetch genres
    const {
        data,
    } = useQuery(['genres'], fetchGenres);

    useEffect(() => {
        if (data) {
            setGenres(data?.data);
        }
    }, [data]);

    // click selected genre
    function onSelectGenre(id: number) {
        setSelectedGenreId(id);
    }

    // fetch movies
    const {
        data: moviesData,
        status: moviesStatus,
    } = useQuery(['movies', selectedGenreId], () => fetchMoviesByGenreId(selectedGenreId), {
        enabled: !!selectedGenreId,
    });

    // fetch selected genre
    const {
        data: genreRecord,
        status: genreStatus,
    } = useQuery(['genres', selectedGenreId], () => fetchGenresById(selectedGenreId), {
        enabled: !!selectedGenreId,
    });

    useEffect(() => {
        if (moviesStatus === 'success') {
            setMovies(moviesData?.data);
        }

        if (genreStatus === 'success') {
            setSelectedGenre(genreRecord?.data);
        }

    }, [selectedGenreId, moviesData, genreRecord]);

    return (
        <GenresContext.Provider value={{
            genres,
            movies,
            selectedGenreId,
            selectedGenre,
            onSelectGenre
        }}>
            {children}
        </GenresContext.Provider>
    );
}

export const useGenres = () => {
    const context = useContext(GenresContext);
    if (context === undefined) {
        throw new Error("useGenres must be used within a GenresProvider");
    }
    return context;
}