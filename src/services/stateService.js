import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    news: null,
};

export const setNews = createAction('setNews');

const reducer = createReducer(initialState, {
    [setNews]: (state, action) => {
        state.news = action.payload;
    },
});

export const store = configureStore({ reducer });