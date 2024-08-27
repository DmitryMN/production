import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { fetchArticlesPage } from '../../model/services/fetchArticlesPage/fetchArticlesPage';
import { ArticlesPageSchema } from '../../model/types/articlesPageSchema';
import { ARTICLES_VIEW_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types/sortOrder';


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
    order: 'asc',
    sort: ArticleSortField.VIEWS,
    search: '',
    _init: false,
    ids: [],
    entities: {}
});

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: initState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 4 : 9;
            state._init = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesPage.pending, (state, action) => {
            state.error = '';
            state.isLoading = true;
            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        }).addCase(fetchArticlesPage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.length > 0;
            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            } else {
                articlesAdapter.addMany(state, action.payload);
            }
        }).addCase(fetchArticlesPage.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    }
});

export const getArticlesPage = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || initState
);
export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;