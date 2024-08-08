import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesPage } from '../../services/fetchArticlesPage/fetchArticlesPage';
import { getArticlesPageInit } from '../../selectors/getArticlesPageInit/getArticlesPageInit';


export const initArticlesPage = createAsyncThunk<void, undefined, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, { rejectWithValue, dispatch, extra, getState }) => {

        const page = getArticlesPagePage(getState());
        const _init = getArticlesPageInit(getState());

        if(!_init) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesPage({ page }));
        }        
    },
);
