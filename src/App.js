import {Link, Route, Routes} from "react-router-dom";

import HomeComponents from "./components/homeComponents/HomeComponents";
import MoviesList from "./components/moviesList/MoviesList";
import MoviesListID from "./components/moviesListID/MoviesListID";
import Genres from "./components/genres/Genres";
import GenresID from "./components/genresID/GenresID";
import Search from "./components/search/Search";

export default function App() {

    return (
        <div>

            <div className="Links">

                <div className="Links_сolor">
                    <ul><Link to={'/'}>Now Playing Movies</Link></ul>
                    <ul><Link to={'/movies'}>Movies</Link></ul>
                    <ul><Link to={'/genres'}>Genres</Link></ul>
                    <ul><Link to={'/search'}>Search Movies</Link></ul>
                </div>

            </div>

            <ul>

                <Routes>
                    <Route path={''} element={<HomeComponents/>}>
                        <Route path={':movieD_id'} element={<MoviesListID/>}/>
                    </Route>
                    <Route path={'movies'} element={<MoviesList/>}>
                        <Route path={':movieD_id'} element={<MoviesListID/>}/>
                    </Route>
                    <Route path={'genres'} element={<Genres/>}>
                        <Route path={':id'} element={<GenresID/>}>
                            <Route path={':movieD_id'} element={<MoviesListID/>}/>
                        </Route>
                    </Route>
                    <Route path={'search'} element={<Search/>}>
                        <Route path={':movieD_id'} element={<MoviesListID/>}/>
                    </Route>
                </Routes>
            </ul>

        </div>


    );
}