import { useContext } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./ThemeContext";



interface useThemeType {
    changeTheme: () => void,
    theme: Theme
}

export const useTheme = (): useThemeType => {

    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
    }

    return {
        theme,
        changeTheme
    }
}