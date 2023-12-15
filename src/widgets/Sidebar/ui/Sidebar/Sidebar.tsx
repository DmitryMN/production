import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { AppRoutes } from 'shared/config/routeConfig';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const changeHandler = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid={'sidebar'} className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}>
      <Button className={style.collapseBtn} onClick={changeHandler}>{collapsed ? '>' : '<'}</Button>
      <div className={style.links}>
        <AppLink theme={AppLinksTheme.PRIMARY} className={style.navLink} to={AppRoutes.MAIN}>Main</AppLink>
        <AppLink theme={AppLinksTheme.PRIMARY} className={style.navLink} to={AppRoutes.ABOUT}>About</AppLink>
      </div>
      <div className={style.switchersWrap}>
        <LangSwitcher className={style.switchLang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
