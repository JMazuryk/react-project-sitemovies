import {Link} from "react-router-dom";
import {Routes, Route} from "react-router-dom";

import MoviesPageMain from "./pages/MoviesPageMain";
import MovieForm from "./components/movieForm/MovieForm";
import Movies from "./components/movies/Movies";
import Genres from "./components/genres/Genres";
import MainComponents from "./components/mainComponents/MainComponents";



export default function App() {
    return (
        <div>
            <ul>
                <ul><Link to={'/'}>Home</Link></ul>
                <ul><Link to={'/movies'}>Movies</Link></ul>
                <ul><Link to={'/genres'}>Genres</Link></ul>
            </ul>

            <Routes>
                <Route path={'movies'} element={<Movies/>}/>
                <Route path={'genres'} element={<Genres/>}/>
            </Routes>
            <hr/>
<div>
    <MainComponents/>
</div>
        </div>
    );
}