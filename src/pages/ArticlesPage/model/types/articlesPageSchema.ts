import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, string> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    hasMore: boolean
    page: number
    limit?: number
    _init: boolean
} 
