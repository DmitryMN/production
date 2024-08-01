import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../../model/selectors/getArticlePageLimit/getArticlePageLimit';

interface FetchArticlesPageProps {
    page: number;
}

export const fetchArticlesPage = createAsyncThunk<Article[], FetchArticlesPageProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, { rejectWithValue, dispatch, extra, getState }) => {

        const limit = getArticlesPageLimit(getState());
        const { page = 1 } = props;
        
        try {

            const requestHeader = {
                headers: {
                    authorization: '123'
                },
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
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
