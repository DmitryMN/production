import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const getArticleDetailsData = (state: StateSchema): Article => {
    return state.articleDetails?.data;
}
