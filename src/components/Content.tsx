import { useGenres } from "../context/GenresContext";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

export function Content() {

    const { selectedGenre, movies } = useGenres();

    return (
        <div className="container">
            {selectedGenre && <Header title={selectedGenre.title} />}

            <main>
                <div className="movies-list">
                    {movies?.map(movie => (
                        <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
                    ))}
                </div>
            </main>
        </div>
    )
}