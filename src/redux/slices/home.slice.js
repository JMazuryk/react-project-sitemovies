import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {homeService} from "../../services";

const initialState = {
    nowPlayingMovies: []
};

const getAll = createAsyncThunk(
    'homeSlice/getAll',
    async () => {
        const {data} = await homeService.getAll();
        return (data.results)
    }
);

const homeSlice = createSlice(
    {
        name: 'homeSlice',
        initialState,
        reducers: {},
        extraReducers: (builder) =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.nowPlayingMovies = action.payload
                })
    });

const {reducer: nowPlayingMoviesReducer} = homeSlice;

const homeActions = {
    getAll,
}

export {
    nowPlayingMoviesReducer,
    homeActions
}

