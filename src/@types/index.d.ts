
interface GenreProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface ContentProps {
    selectedGenre: {
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string;
    };

    movies: Array<{
        imdbID: string;
        Title: string;
        Poster: string;
        Ratings: Array<{
            Source: string;
            Value: string;
        }>;
        Runtime: string;
    }>;
}