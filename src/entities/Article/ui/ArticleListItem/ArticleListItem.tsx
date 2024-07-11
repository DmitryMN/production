import React from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleListItem.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/viewing.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({ className, article, view }) => {

    if (view === ArticleView.TILE) {
        return (
            <div className={classNames(style.articleListTile, {}, [className, style[view]])}>
                <Card>
                    <div className={style.imageWrapper}>
                        <img className={style.img} src={article.img} alt="picture new" />
                        <Text className={style.createAt} text={article.createAt} />
                    </div>
                    <div className={classNames(style.articleListInfo, {}, [className])}>
                        <Text className={style.type} text={article.type.join(', ')} />
                        <Icon Svg={EyeIcon} />
                        <Text className={style.views} text={String(article.views)} />
                    </div>
                    <Text className={style.title} text={article.title} />
                </Card>
            </div>
        );
    }

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(style.articleListItem, {}, [className, style[view]])}>
                <Card>
                    <div className={style.imageWrapper}>
                        <Avatar className={style.avatar} src={article.user.avatar} size={24} />
                        <Text className={style.username} text={article.user?.username} />
                        <Text className={style.createAt} text={article.createAt} />
                    </div>
                    <Text className={style.title} text={article.title} />
                    <Text className={style.type} text={article.type.join(', ')} />
                    <img className={style.img} src={article.img} alt="logo_image" />
                    <div className={style.footWrap}>
                        <Button className={style.button}>Reed more...</Button>
                        <Text className={style.views} text={String(article.views)} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </Card>
            </div>
        );
    }


    return (
        <div className={classNames(style.articleListItem, {}, [className, style[view]])}>
            {article.title}
        </div>
    );
}; 