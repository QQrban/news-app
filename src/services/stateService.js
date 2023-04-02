import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    topNews: null,
    news: null,
};

export const setNews = createAction('setNews');
export const setTopNews = createAction('setTopNews');

const reducer = createReducer(initialState, {
    [setNews]: (state, action) => {
        state.news = action.payload;
    },
    [setTopNews]: (state, action) => {
        state.topNews = action.payload;
    },
});

export const store = configureStore({ reducer });