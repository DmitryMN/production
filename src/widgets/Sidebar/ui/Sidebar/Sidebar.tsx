import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const changeHandler = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <menu data-testid={'sidebar'} className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}>
      <div className={style.links}>
        {sidebarItemsList.map((elem) => <SidebarItem key={elem.path} item={elem} collapsed={collapsed} />)}
      </div>
      <Button className={style.collapseBtn} onClick={changeHandler}>{collapsed ? '>' : '<'}</Button>
      <div className={style.switchersWrap}>
        <LangSwitcher className={style.switchLang} />
        <ThemeSwitcher />
      </div>
    </menu>
  );
});
