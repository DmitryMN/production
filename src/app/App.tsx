import React from "react";
import "./styles/_index.scss";
import { Link } from "react-router-dom";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";


const App: React.FC<any> = () => {

  const { theme, changeTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={changeTheme}>{theme === Theme.DARK ? "Normal" : "Dark"}</button>
      <Link to={"/"}>Main</Link>
      <div>ok</div>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  )
}

export default App;