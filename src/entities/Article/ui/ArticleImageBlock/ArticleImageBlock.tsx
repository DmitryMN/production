import { ArticleBlockImage } from '../../model/types/article';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = memo(({ className, block }) => {
  return (
    <div className={classNames('', {}, [className])}>
      
    </div>
  );
});
