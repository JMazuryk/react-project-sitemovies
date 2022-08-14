import {Link} from "react-router-dom";

export default function MoviesListCard({movie}) {

    return (
        <div className="MoviesListCard">
            <div>
                <Link to={movie.id.toString()}>
                    <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                </Link>
            </div>
            <div className="MoviesListCard_content">
                <h2> {movie.original_title} </h2>
                <h3>{movie.vote_average}</h3>
            </div>

        </div>
    );
}
