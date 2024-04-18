import { createSlice } from '@reduxjs/toolkit';
import { ArticleChema } from 'entities/Article/model/types/article';

const initialState: ArticleChema = {
    data: undefined,
    isLoading: false,
    error: ''
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers: () => {
    }
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;