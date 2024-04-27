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
import style from './ArticleDetails.module.scss';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Sceleton } from 'shared/ui/Sceleton/Sceleton';

interface ArticleDetailsProps {
  className?: string;
  id: string;
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
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (<div className={style.loading}>
      <Sceleton className={style.loading__avatar} width={'200px'} height={'200px'} border='50%'/>
      <Sceleton width={'200px'} height={'32px'} />
      <Sceleton width={'200px'} height={'34px'} />
      <Sceleton width="100%" height={'200px'} />
      <Sceleton width="100%" height={'200px'} />
    </div>);
  } else if (error) {
    content = (<Text
      theme={TextTheme.ERROR}
      title={'Download article details error'}
      text={'Refresh window please'}
      align={TextAlign.CENTER}
    />);
  } else {
    content = (<div>Article details</div>);
  }

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
      <div className={classNames(style.article_details, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
