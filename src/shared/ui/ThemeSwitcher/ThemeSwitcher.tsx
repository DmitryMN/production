import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React, { memo } from 'react';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, changeTheme } = useTheme();

    return (
        <Button className={className} theme={ThemeButton.CLEAR} onClick={changeTheme}>
            {theme === Theme.DARK ? <LightIcon width={'30px'} height={'30px'} /> : <DarkIcon width={'30px'} height={'30px'} />}
        </Button>
    );
});
