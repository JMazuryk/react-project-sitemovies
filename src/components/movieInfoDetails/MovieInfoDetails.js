
export default function MovieInfoDetails({movieInfoDetails}) {

    return (
        <div className="MoviInfoDetails">
            <div>
                <img src={`http://image.tmdb.org/t/p/w300${movieInfoDetails.poster_path}`}/>
            </div>
            <div className="MovieDetailsContent">
                <h4> {movieInfoDetails.original_title} </h4>
                <h5>Rate:{movieInfoDetails.vote_average} </h5>
                <h6>Year: {movieInfoDetails.release_date.substring(0, 4)} </h6>
                <h7>Overview</h7>
                <hr/>
                <h8> {movieInfoDetails.overview}</h8>
            </div>
        </div>
    );
}

