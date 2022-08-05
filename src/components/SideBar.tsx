import { useGenres } from "../context/GenresContext";
import { Button } from "./Button";

export function SideBar() {

    const { genres, onSelectGenre, selectedGenreId } = useGenres();

    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {genres.map((genre: GenreProps) => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => onSelectGenre(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>

        </nav>
    )
}