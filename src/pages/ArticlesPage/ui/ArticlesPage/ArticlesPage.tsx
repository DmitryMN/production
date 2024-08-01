import React, { useCallback, useEffect, useState } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticlesPage } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesPage } from '../../model/services/fetchArticlesPage/fetchArticlesPage';
import { useSelector } from 'react-redux';
import { getArticlesPageLoading } from '../../model/selectors/getArticlesPageLoading/getArticlesPageLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector/ArticlesViewSelector';
import { getArticlesPagePage } from '../../model/selectors/getArticlePagePage/getArticlePagePage';
import { getArticlesPageHasMore } from '../../model/selectors/getArticlePageHasMore/getArticlePageHasMore';
import { useInView } from 'react-intersection-observer';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { Page } from 'shared/ui/Page/Page';

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
  const page = useSelector(getArticlesPagePage);
  const hasMore = useSelector(getArticlesPageHasMore);
  const error = useSelector(getArticlesPageError);

  useEffect(() => {
    dispatch(fetchArticlesPage({page}))
  }, []);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [])

  const onScrollEnd = () => {
    if(hasMore) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesPage({page: page + 1}));
    }
  }

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
      <Page onScrollEnd={onScrollEnd}>
        <ArticlesViewSelector view={view} onViewClick={onChangeView} />
        <div className={classNames(style.articlesPage, {}, [className])}>
          <ArticleList articles={articles} isLoading={isLoading} view={view} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
