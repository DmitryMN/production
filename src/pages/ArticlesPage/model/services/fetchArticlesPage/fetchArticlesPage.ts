import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder/getArticlesPageOrder';

interface FetchArticlesPageProps {
    page: number;
    replace?: boolean;
}

export const fetchArticlesPage = createAsyncThunk<Article[], FetchArticlesPageProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, { rejectWithValue, dispatch, extra, getState }) => {

        const limit = getArticlesPageLimit(getState());
        const search = getArticlesPageSearch(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const { page = 1 } = props;
        
        try {

            const requestHeader = {
                headers: {
                    authorization: '123'
                },
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _order: order,
                    _sort: sort,
                    q: search,
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
