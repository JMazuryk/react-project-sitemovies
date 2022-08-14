import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: []
};

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async () => {
        const {data} = await genreService.getAll();
        return (data.genres)
    }
);

const genreSlice = createSlice(
    {
        name: 'genreSlice',
        initialState,
        reducers: {},
        extraReducers: (builder) =>
            builder
                .addCase(getGenres.fulfilled, (state, action) => {
                    state.genres = action.payload
                })
    });

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getGenres
}

export {
    genreReducer,
    genreActions
}

