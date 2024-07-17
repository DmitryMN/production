import React, { memo, useCallback } from 'react';
import { Article, ArticleBlockText, ArticleBlockType, ArticleView } from '../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleListItem.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/viewing.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = memo(({ className, article, view }) => {

    const navigate = useNavigate();

    const onMoveArticle = useCallback(() => {
        navigate(AppRoutes.ARTICLE_DETAILS + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.TILE) {
        return (
            <div className={classNames(style.articleListTile, {}, [className, style[view]])}>
                <Card onClick={onMoveArticle}>
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

        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlockText;

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
                    {textBlock && (<ArticleTextBlock className={style.textBlock} block={textBlock} />)}
                    <div className={style.footWrap}>
                        <Button className={style.button} onClick={onMoveArticle}>Read more...</Button>
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
}); 