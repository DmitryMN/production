import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import style from './SidebarItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getAuthUserState } from 'entities/User';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getAuthUserState);

    if (!isAuth && item?.authOnly) {
        return null;
    }

    return (
        <AppLink theme={AppLinksTheme.PRIMARY} className={classNames(style.navLink, { [style.collapsed]: collapsed }, [])} to={item.path}>
            <item.Icon className={style.icon} />
            <p>{t(item.text)}</p>
        </AppLink>
    );
});
