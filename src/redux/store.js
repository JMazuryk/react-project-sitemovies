import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, nowPlayingMoviesReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    nowPlayingMovies: nowPlayingMoviesReducer
});

const setupStore = () => configureStore(
    {
        reducer: rootReducer
    });

export {
    setupStore
}