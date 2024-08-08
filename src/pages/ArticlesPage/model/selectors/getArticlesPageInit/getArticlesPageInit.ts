import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageInit = (state: StateSchema) =>  state.articlesPage?._init;