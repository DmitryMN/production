import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleList.module.scss';
import { ArticleListItemSceleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSceleton';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSceleton = (view: ArticleView) => {
    return new Array(view === ArticleView.LIST ? 3 : 9).fill(0).map((el, index) => (<ArticleListItemSceleton key={index} view={view} />));
};


export const ArticleList: React.FC<ArticleListProps> = ({ className, articles, isLoading, view = ArticleView.LIST }) => {

    if (isLoading) {
        return (
            <div className={classNames(style[view], {}, [className])}>
            {
                getSceleton(view)
            }
        </div>
        )
    }

    return (
        <div className={classNames(style[view], {}, [className])}>
            {
                articles.length > 0
                    ? articles.map(article => <ArticleListItem key={article.id} article={article} view={view} />)
                    : null
            }
        </div>
    );
};  