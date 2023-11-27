import React from "react";
import style from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinksTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <nav className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink theme={AppLinksTheme.PRIMARY} className={style.navLink} to={"/"}>Main</AppLink>
                <AppLink theme={AppLinksTheme.PRIMARY} className={style.navLink} to={"/about"}>About</AppLink>
            </div>
        </nav>
    )
}
