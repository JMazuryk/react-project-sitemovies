import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesListService} from "../../services";

const initialState = {
    movies: []
};

const getMovies = createAsyncThunk(
    'moviesListSlice/getMovies',
    async () => {
        const {data} = await moviesListService.getAll();
        return (data.results)
    }
);

const moviesListSlice = createSlice(
    {
        name: 'moviesListSlice',
        initialState,
        reducers: {},
        extraReducers: (builder) =>
            builder
                .addCase(getMovies.fulfilled, (state, action) => {
                    state.movies = action.payload
                })
    });

const {reducer: movieReducer} = moviesListSlice;

const movieActions = {
    getMovies
}

export {
    movieReducer,
    movieActions
}

