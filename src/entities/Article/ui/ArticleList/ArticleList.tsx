import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList: React.FC<ArticleListProps> = ({ className, articles, isLoading, view = ArticleView.LIST }) => {
    return (
        <div className={classNames(style[view], {}, [className])}>
            {
                articles.length > 0 
                    ? articles.map(article => <ArticleListItem key={article.id} article={article} view={view}/>) 
                    : null
            }
        </div>
    );
};  