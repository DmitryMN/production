import React, { ReactNode, useMemo, useState, FC } from "react";
import { ThemeContext, LOCAL_STORAGE_THEME, Theme } from "./themeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as Theme || Theme.NORMAL;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
