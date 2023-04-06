import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    topNews: null,
    categoryNews: null,
};

export const setTopNews = createAction('setTopNews');
export const setCategoryNews = createAction('setCategoryNews');

const reducer = createReducer(initialState, {
    [setTopNews]: (state, action) => {
        state.topNews = action.payload;
    },
    [setCategoryNews]: (state, action) => {
        state.categoryNews = action.payload;
    },
});

export const store = configureStore({ reducer });