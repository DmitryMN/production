import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
                <Link to={"/"}>Main</Link>
                <Link to={"/about"}>About</Link>
            </div>
        </div>
    )
}
