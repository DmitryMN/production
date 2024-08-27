import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticlesPageFilters.module.scss';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector/ArticlesViewSelector';
import { useSelector } from 'react-redux';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelectors } from 'features/ArticleSortSelectors/ArticleSortSelectors';
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { SortOrder } from 'shared/types/sortOrder';
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';
import { getArticlesPagePage } from 'pages/ArticlesPage/model/selectors/getArticlesPagePage/getArticlesPagePage';

interface ArtcilesPageFiltresProps {
    className?: string;
}

export const ArticlesPageFiltres: React.FC<ArtcilesPageFiltresProps> = ({ className }) => {

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const search = useSelector(getArticlesPageSearch);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const page = useSelector(getArticlesPagePage);

    const fetchData = () => {
        dispatch(fetchArticlesPage({ page, replace: true }));
    };

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, []);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(style.articlesPageFilters, {}, [className])}>
            <div className={style.main}>
                <ArticleSortSelectors onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} sort={sort} order={order} />
                <ArticlesViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={style.search}>
                <Input placeHolder='Search' className={style.input} onChange={onChangeSearch} value={search} />
            </Card>
        </div>
    );
};
