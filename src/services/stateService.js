import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    topNews: null,
    sportNews: null,
    news: null,
};

export const setNews = createAction('setNews');
export const setTopNews = createAction('setTopNews');
export const setSportNews = createAction('setSportNews');

const reducer = createReducer(initialState, {
    [setNews]: (state, action) => {
        state.news = action.payload;
    },
    [setTopNews]: (state, action) => {
        state.topNews = action.payload;
    },
    [setSportNews]: (state, action) => {
        state.topNews = action.payload;
    },
});

export const store = configureStore({ reducer });