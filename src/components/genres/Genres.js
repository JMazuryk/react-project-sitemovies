import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";

import {genreActions} from "../../redux/slices";

export default function Genres() {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [])
    return (
        <div>
            {
                genres.map(genre => (
                    <Link key={genre.id} to={`${genre.id}`}>
                        <ul>{genre.name}</ul>
                    </Link>
                ))
            }
            <Outlet/>
        </div>
    );
}