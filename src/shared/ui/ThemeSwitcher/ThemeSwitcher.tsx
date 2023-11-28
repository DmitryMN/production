import { Theme, useTheme } from "app/providers/ThemeProvider";
import React from "react";
import LightIcon from "shared/assets/icons/light-theme.svg";
import DarkIcon from "shared/assets/icons/dark-theme.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

export interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {

    const { theme, changeTheme } = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} onClick={changeTheme}>
            {theme === Theme.DARK ?<LightIcon /> : <DarkIcon />}
        </Button>
    )
}
