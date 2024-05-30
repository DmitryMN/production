import { ArticleDetailsPageLazy } from './ui/ArticleDetailsPage/ArticleDetailsPage.lazy';
import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import { getArticleComments, articleDetailsCommentsActions, articleDetailsCommentsReducer } from './model/slice/articleDetailsCommentsSlice';

export { ArticleDetailsPageLazy as ArticleDetailsPage };

export { 
    ArticleDetailsCommentsSchema,
    getArticleComments,
    articleDetailsCommentsReducer,
    articleDetailsCommentsActions,
};