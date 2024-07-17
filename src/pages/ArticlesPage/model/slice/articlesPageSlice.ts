import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageSchema';


const articlesAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

const initState = articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.LIST,
    ids: [],
    entities: {}
})

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: initState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesPage.pending, (state, action) => {
            state.error = '';
            state.isLoading = true;
        }).addCase(fetchArticlesPage.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, action.payload);
        }).addCase(fetchArticlesPage.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    }
});

export const getArticlesPage = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || initState
);
export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;