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
import { Text, TextAlign, TextTheme, TextSize } from 'shared/ui/Text/Text';
import { Sceleton } from 'shared/ui/Sceleton/Sceleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/viewing.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Title, TitleAlign, TitleTheme } from 'shared/ui/Title/Title';
import { Icon } from 'shared/ui/Icon/Icon';

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
    content = (<div className={style.article__item}>
      <Sceleton className={style.article__avatar} width={'200px'} height={'200px'} border='50%' />
      <Sceleton width={'200px'} height={'32px'} />
      <Sceleton width={'200px'} height={'34px'} />
      <Sceleton width="100%" height={'200px'} />
      <Sceleton width="100%" height={'200px'} />
    </div>);
  } else if (error) {
    content = (
      <>
        <Title
          title={'Download article details error'}
          theme={TitleTheme.ERROR}
          align={TitleAlign.CENTER}
        />
        <Text
          theme={TextTheme.ERROR}
          text={'Refresh window please'}
          align={TextAlign.CENTER}
        />
      </>
    );
  } else {
    content = (
      <div className={style.article__item}>
        <Avatar className={style.article__avatar} src={article?.img} alt={'avatar-image'} size={200} />
        <Title title={article?.title} />
        <Text text={article?.subtitle} size={TextSize.MEDIUM} />
        <div className={style.article__icons}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={style.article__icons}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createAt} />
        </div>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
      <div className={classNames(style.article_details, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
