import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/sortOrder';

export interface ArticlesPageSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    hasMore: boolean;
    page: number;
    limit: number;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    _init: boolean;
} 
