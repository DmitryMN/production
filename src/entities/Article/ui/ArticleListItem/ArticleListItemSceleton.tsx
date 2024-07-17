import React, { memo } from 'react';
import style from './ArticleListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Sceleton } from 'shared/ui/Sceleton/Sceleton';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSceletonProps {
  view?: ArticleView;
}

export const ArticleListItemSceleton: React.FC<ArticleListItemSceletonProps> = memo(({ view }) => {

  const listSceleton = (
    <>
      <Card>
        <div className={style.imageWrapper}>
          <Sceleton className={style.avatar} width={24} height={24} border='50%' />
        </div>
        <Sceleton className={style.img} height={250} />
        <Sceleton className={style.textBlock} height={70} />
      </Card>
    </>
  );

  const tileSceleton = (
    <>
      <Card>
        <Sceleton className={style.img} height={200} width={200}/>
        <Sceleton className={style.textBlock} height={16} width={130} />
        <Sceleton className={style.title} height={16} width={130}/>
      </Card>
    </>
  );

  return (
    <div className={classNames(style.articleListItem, {}, ['', style[view]])}>
      {view === ArticleView.LIST ? listSceleton : tileSceleton}
    </div>
  );
});