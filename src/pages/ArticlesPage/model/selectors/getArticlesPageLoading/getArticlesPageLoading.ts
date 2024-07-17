import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading;