import {Outlet} from "react-router-dom";
import React, {useState} from "react";

import MoviesListCard from "../moviesListCard/MoviesListCard";

export default function Search() {

    const [query, setQuery] = useState("");
    const [search, setSearch] = useState([]);
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8887e54042302eab20958266d9316585&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setSearch(data.results);
                } else {
                    setSearch([]);
                }
            })
    }

    return (
        <div>
            <div>
                <input className="Search" type="Text" placeholder="Search"
                       value={query}
                       onChange={onChange}
                />
            </div>
            <Outlet/>
            {search.length > 0 && (
                <ul>
                    {
                        search.map(movie => <MoviesListCard
                            key={movie.id}
                            movie={movie}
                        />)}

                </ul>
            )}
        </div>

    );
}