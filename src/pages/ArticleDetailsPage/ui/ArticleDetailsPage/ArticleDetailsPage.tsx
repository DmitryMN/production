import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducer: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = ({ className }) => {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [dispatch, id])

  if (!id) {
    return (<div>Atricle not found</div>);
  }

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAutoUnmount={true}>
      <div className={classNames('', {}, [className])}>
        <ArticleDetails id={id} />
        <Text text={'Comments:'} />
        <CommentList comments={comments} isLoading={isLoading}/>
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;

