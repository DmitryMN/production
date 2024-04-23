import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailReducer } from '../../model/slice/articleSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsLoading } from 'entities/Article/model/selectors/getArtcileDetailsLoading/getArtcileDetailsLoading';
import { getArticleDetailsError } from 'entities/Article/model/selectors/getArtcileDetailsError/getArtcileDetailsError';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArtcileDetailsData/getArtcileDetailsData';

interface ArticleDetailsProps {
  className?: string;
  id: string
}

const initialReducer: ReducersList = {
  articleDetails: articleDetailReducer
};

export const ArticleDetails: React.FC<ArticleDetailsProps> = memo(({ className, id }) => {

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id]);

  let content;

  if(isLoading) {
    content = (<div>Loading...</div>);
  } else if(error) {
    content = (<div>Error...</div>);
  } else {
    content = (<div>ArticleDetails</div>);
  }

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
      <div className={classNames('', {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
