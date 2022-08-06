import MoviesPageMain from "./pages/MoviesPageMain";
import MovieForm from "./components/movieForm/MovieForm";
import Movies from "./components/movies/Movies";
import Movie from "./components/movie/Movie";


export default function App() {
    return (
        <div>
            <MoviesPageMain/>
            <MovieForm/>
            <hr/>
            <Movies/>
        </div>
    );
}