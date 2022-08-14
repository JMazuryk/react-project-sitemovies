import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {homeActions} from "../../redux/slices";
import MoviesListCard from "../moviesListCard/MoviesListCard";

export default function HomeComponents() {

    const {nowPlayingMovies} = useSelector(state => state.nowPlayingMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homeActions.getAll());
    }, [])
    return (

        <div className="HomeComponent">
            <Outlet/>
            {
                nowPlayingMovies.map(movie => <MoviesListCard
                    key={movie.id}
                    movie={movie}
                />)
            }
        </div>
    );
}
