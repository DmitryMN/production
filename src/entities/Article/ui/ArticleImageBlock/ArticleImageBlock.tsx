import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockProps {
  className?: string;
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = memo(({ className }) => {
  return (
    <div className={classNames('', {}, [className])}>ArticleDetailBlockComponent</div>
  );
});
