import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import MoviesListCard from "../moviesListCard/MoviesListCard";

export default function MoviesList() {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, [])

    return (
        <div className="MoviesList">
            <Outlet/>
            {
                movies.map(movie => <MoviesListCard
                    key={movie.id}
                    movie={movie}
                />)
            }
        </div>

    );
}