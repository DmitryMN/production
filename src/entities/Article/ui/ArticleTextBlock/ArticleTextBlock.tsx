import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockProps {
    className?: string;
}

export const ArticleTextBlock: React.FC<ArticleTextBlockProps> = memo(({ className }) => {
    return (
        <div className={classNames('', {}, [className])}>ArticleTextBlock</div>
    );
});