import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import style from './SidebarItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation();

    return (
        <AppLink theme={AppLinksTheme.PRIMARY} className={classNames(style.navLink, { [style.collapsed]: collapsed }, [])} to={item.path}>
            <item.Icon className={style.icon} />
            <p>{t(item.text)}</p>
        </AppLink>
    );
});
