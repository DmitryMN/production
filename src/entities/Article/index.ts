import { Article, ArticleView, ArticleTypes, ArticleBlockType } from './model/types/article';
import { articleDetailActions, articleDetailReducer } from './model/slice/articleSlice';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleDetailsChema } from './model/types/articleDetailsChema';
import { getArticleDetailsData } from './model/selectors/getArtcileDetailsData/getArtcileDetailsData';
import { getArticleDetailsError } from './model/selectors/getArtcileDetailsError/getArtcileDetailsError';
import { getArticleDetailsLoading } from './model/selectors/getArtcileDetailsLoading/getArtcileDetailsLoading';
import { ArticleList } from './ui/ArticleList/ArticleList';

export {
    ArticleDetailsChema,
    Article,
    ArticleView,
    ArticleList,
    ArticleTypes,
    ArticleBlockType,
    articleDetailActions,
    articleDetailReducer,
    ArticleDetails,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
};