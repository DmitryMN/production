import React, { memo } from 'react';
import { User } from 'entities/User';
import { Comment } from '../../model/types/comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import style from './CommentCard.module.scss';
import { Sceleton } from 'shared/ui/Sceleton/Sceleton';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard: React.FC<CommentCardProps> = memo(({ className, comment, isLoading }) => {

    if (isLoading) {
        return (
            <div >
                <Sceleton height={'24px'}/>
                <Sceleton height={'24px'}/>
            </div>
        );
    }

    return (
        <div className={classNames(style.card, {}, [className])}>
            <div className={style.profile}>
                <Avatar size={24} src={comment.user.avatar} />
                <Text text={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});