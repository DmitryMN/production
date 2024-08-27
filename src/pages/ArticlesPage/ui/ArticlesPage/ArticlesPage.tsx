import React, { useCallback, useEffect } from 'react';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticlesPage } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageLoading } from '../../model/selectors/getArticlesPageLoading/getArticlesPageLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { Page } from 'widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFiltres } from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import { getArticlesPageHasMore } from '../../model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';

interface ArticlesPageProps {
  className?: string;
}

const initialReducer: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticlesPage.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);
  const hasMore = useSelector(getArticlesPageHasMore);
  const error = useSelector(getArticlesPageError);

  useEffect(() => {
    dispatch(initArticlesPage());
    // dispatch(articlesPageActions.setHasMore(true));
  }, []);

  const onScrollEnd = useCallback(() => {
    if (hasMore && !isLoading) {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch, hasMore, isLoading]);

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={false}>
      <Page onScrollEnd={onScrollEnd}>
        <ArticlesPageFiltres />
        <div className={classNames(style.articlesPage, {}, [className])}>
          <ArticleList articles={articles} isLoading={isLoading} view={view} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
