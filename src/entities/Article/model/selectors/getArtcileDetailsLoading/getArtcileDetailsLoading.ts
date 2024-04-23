import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsLoading = (state: StateSchema): boolean => {
    return state.articleDetails?.isLoading;
}