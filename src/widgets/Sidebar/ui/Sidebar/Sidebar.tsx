import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const changeHandler = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid={'sidebar'} className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}>
      <Button className={style.collapseBtn} onClick={changeHandler}>{collapsed ? '>' : '<'}</Button>
      <div className={style.links}>
        {SidebarItemsList.map((elem) => <SidebarItem key={elem.path} item={elem} collapsed={collapsed} />)}
      </div>
      <div className={style.switchersWrap}>
        <LangSwitcher className={style.switchLang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
});
