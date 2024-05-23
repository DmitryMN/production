import { ArticleBlockImage } from '../../model/types/article';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleImageBlock.module.scss';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = memo(({ className, block }) => {
  return (
    <div className={classNames(style.pictureBlock, {}, [className])}>
      <img className={style.picture} src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
