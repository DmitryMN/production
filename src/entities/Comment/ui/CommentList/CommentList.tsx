import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: React.FC<CommentListProps> = memo(({ className, comments, isLoading }) => {
    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />)
                : <Text text='Коментарии отсутствуют' />
            }
        </div>
    );
});