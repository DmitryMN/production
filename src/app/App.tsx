import React from "react";
import "./styles/_index.scss";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";


const App: React.FC<any> = () => {

  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar className={theme} />
      <AppRouter />
    </div>
  )
}

export default App;