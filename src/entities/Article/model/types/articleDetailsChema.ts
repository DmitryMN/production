import { Article } from './article';

export interface ArticleDetailsChema {
    isLoading: boolean;
    error?: string;
    data?: Article;    
}