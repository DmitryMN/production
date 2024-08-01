import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleTypes, ArticleView } from 'entities/Article';
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageSchema';
import { ARTICLES_VIEW_KEY } from 'shared/const/localStorage';


const articlesAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

const initState = articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.LIST,
    hasMore: true,
    page: 1,
    limit: 4,
    ids: [],
    entities: {}
})

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: initState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleView
            state.view = view;
            state.limit = view === ArticleView.LIST ? 4 : 9;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesPage.pending, (state, action) => {
            state.error = '';
            state.isLoading = true;
        }).addCase(fetchArticlesPage.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            state.hasMore = action.payload.length > 0;
            articlesAdapter.addMany(state, action.payload);
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