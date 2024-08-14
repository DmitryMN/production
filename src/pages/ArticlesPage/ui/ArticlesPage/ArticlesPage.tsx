import React, { useCallback, useEffect } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticlesPage } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageLoading } from '../../model/selectors/getArticlesPageLoading/getArticlesPageLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector/ArticlesViewSelector';
import { getArticlesPagePage } from '../../model/selectors/getArticlesPagePage/getArticlesPagePage';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { Page } from 'widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { getArticlesPageInit } from '../../model/selectors/getArticlesPageInit/getArticlesPageInit';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

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
  const error = useSelector(getArticlesPageError);
  const _init = useSelector(getArticlesPageInit);

  useEffect(() => {
    dispatch(initArticlesPage())
  }, []);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, []);

  const onScrollEnd = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={false}>
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
