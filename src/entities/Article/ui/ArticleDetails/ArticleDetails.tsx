import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = memo(({ className }) => {
  return (
    <div className={classNames('', {}, [className])}>ArticleDetails</div>
  );
});
