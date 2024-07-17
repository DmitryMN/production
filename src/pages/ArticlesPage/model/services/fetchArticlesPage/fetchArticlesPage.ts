import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesPage = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, { rejectWithValue, dispatch, extra }) => {
        try {
            const requestHeader = {
                headers: {
                    authorization: '123'
                },
                params: {
                    _expand: 'user',
                }
            };

            const response = await extra.api.get<Article[]>('/articles', requestHeader);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Fetch article data error');
        }
    },
);
