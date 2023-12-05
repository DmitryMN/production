import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import style from './AppLink.module.scss';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinksTheme
}

export const AppLink: React.FC<AppLinkProps> = ({ to, className, children, theme = AppLinksTheme.PRIMARY, ...otherProps }) => {
  return (
    <Link to={to} className={classNames(style.appLink, {}, [className, style[theme]])} {...otherProps}>
        {children}
    </Link>
  )
}
