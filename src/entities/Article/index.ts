import { Article } from './model/types/article';
import { articleDetailActions, articleDetailReducer } from './model/slice/articleSlice';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleDetailsChema } from './model/types/articleDetailsChema';
import { getArticleDetailsData } from './model/selectors/getArtcileDetailsData/getArtcileDetailsData';
import { getArticleDetailsError } from './model/selectors/getArtcileDetailsError/getArtcileDetailsError';
import { getArticleDetailsLoading } from './model/selectors/getArtcileDetailsLoading/getArtcileDetailsLoading';

export {
    ArticleDetailsChema,
    Article,
    articleDetailActions,
    articleDetailReducer,
    ArticleDetails,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading
};