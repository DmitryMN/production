import { useContext } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./themeContext"

interface UseTheme {
    changeTheme: () => void,
    theme: Theme
}


export const useTheme = (): UseTheme => {

    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
    }

    return {
        theme,
        changeTheme
    }
}