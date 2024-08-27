import React, { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import style from './ArticleSortSelectors.module.scss';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/sortOrder';


interface ArtcileSortSelectorsProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticleSortSelectors: React.FC<ArtcileSortSelectorsProps> = ({ className, sort, order, onChangeOrder, onChangeSort }) => {
        
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: 'ascending'
        },
        {
            value: 'desc',
            content: 'descending'
        }
    ], []);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.VIEWS,
            content: 'views'
        },
        {
            value: ArticleSortField.TITLE,
            content: 'title'
        },
        {
            value: ArticleSortField.CREATED,
            content: 'created'
        }
    ], []);

    return (
        <div className={classNames(style.sortSelection, {}, [className])}>
            <Select label='Sort by' options={sortFieldOptions} value={sort} onChange={onChangeSort}/>
            <Select label='Order by' options={orderOptions} value={order} onChange={onChangeOrder}/> 
        </div>
    );
};
