import React, { useCallback } from 'react';
import { ArticleView } from 'entities/Article';
import ListViewIcon from 'shared/assets/icons/list_view.svg';
import TileViewIcon from 'shared/assets/icons/tile_view.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticlesViewSelector.module.scss';

interface ArticlesViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const articleViewItems = [
    {
        view: ArticleView.LIST,
        icon: ListViewIcon
    },
    {
        view: ArticleView.TILE,
        icon: TileViewIcon
    }
];

export const ArticlesViewSelector: React.FC<ArticlesViewSelectorProps> = ({ className, view, onViewClick }) => {

    const onChangeView = (newView: ArticleView) => () => {
        onViewClick(newView);
    }

    return (
        <div className={classNames(style.articlesViewSelector, {} ,[className])}>
            {articleViewItems.map(el => (
                <Button key={el.view} theme={ThemeButton.CLEAR} className={style.button} onClick={onChangeView(el.view)}>
                    <Icon  Svg={el.icon} className={classNames('', {[style.onSelect]: el.view === view}, [])}/>
                </Button>
            ))}
        </div>
    );
};