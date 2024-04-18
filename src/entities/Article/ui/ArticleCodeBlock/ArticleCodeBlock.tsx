import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockProps {
    className?: string;
}

export const ArticleCodeBlock: React.FC<ArticleCodeBlockProps> = memo(({ className }) => {
    return (
        <div className={classNames('', {}, [className])}>ArticleCodeBlock</div>
    );
});
