import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesPage } from '../../services/fetchArticlesPage/fetchArticlesPage';


export const fetchNextArticlesPage = createAsyncThunk<void, undefined, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesList',
    async (_, { rejectWithValue, dispatch, extra, getState }) => {

        const page = getArticlesPagePage(getState());
        const hasMore = getArticlesPageHasMore(getState());

        if(hasMore) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesPage({page: page + 1}));
        }        
    },
);
