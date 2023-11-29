import React, { useState } from "react";
import { classNames } from "shared/lib/classNames";
import style from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {

  const [collapsed, setCollapsed] = useState(false);

  const changeHandler = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(style.sidebar, {[style.collapsed]: collapsed}, [className])}>
      <Button onClick={changeHandler}>toggle</Button>
      <ThemeSwitcher className={style.switcher}/>
    </div>
  )
}
