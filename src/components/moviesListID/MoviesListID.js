import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import MovieInfoDetails from "../movieInfoDetails/MovieInfoDetails";

export default function MoviesListID() {

    const {movieD_id} = useParams();
    const [MD, setMD] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieD_id}?api_key=8887e54042302eab20958266d9316585&language=en-US`)
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setMD([value]);
            });
    }, [movieD_id]);

    return (
        <div>
            {
                MD.map(movieInfoDetails => <MovieInfoDetails
                    key={movieInfoDetails.id}
                    movieInfoDetails={movieInfoDetails}

                />)
            }
        </div>
    );
}

