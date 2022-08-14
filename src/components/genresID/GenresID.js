import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import MoviesListCard from "../moviesListCard/MoviesListCard";

export default function GenresID() {

    const {id} = useParams();
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8887e54042302eab20958266d9316585&with_genres=${id}`)
            .then(data => data.json())
            .then(data => {
                console.log(data.results)
                setGenre([...data.results]);
            });

    }, [id]);

    return (
        <div className="GenresID">
            <Outlet/>
            {
                genre.map(movie => <MoviesListCard
                    key={movie.id}
                    movie={movie}

                />)
            }
        </div>
    );
}