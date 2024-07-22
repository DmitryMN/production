import React, { useCallback, useEffect } from 'react';
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

interface ArticlesPageProps {
  className?: string;
}

const initialReducer: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticlesPage.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
      <ArticlesViewSelector view={view} onViewClick={onChangeView}/>
      <div className={classNames(style.articlesPage, {}, [className])}>
        <ArticleList articles={articles} isLoading={isLoading} view={view}/>
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
