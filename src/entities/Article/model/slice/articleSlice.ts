import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsChema } from '../types/articleDetailsChema';
import { Article } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsChema = {
    isLoading: false,
    error: '',
    data: undefined,
}

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state, action) => {
            state.error = '';
            state.isLoading = true;
        }).addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(fetchArticleById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    }
});

export const { actions: articleDetailActions } = articleDetailsSlice;
export const { reducer: articleDetailReducer } = articleDetailsSlice;