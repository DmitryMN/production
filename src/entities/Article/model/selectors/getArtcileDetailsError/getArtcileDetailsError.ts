import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsError = (state: StateSchema): string => {
    return state.articleDetails?.error;
}