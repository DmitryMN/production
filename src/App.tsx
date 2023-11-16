import React, { Suspense, useContext, useState } from "react";
import "./styles/_index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage.lazy";
import MainPageLazy from "./pages/MainPage.lazy";
import { ThemeContext } from "./theme/themeContext";
import { useTheme } from "./theme/useTheme";

enum Theme {
  NORMAL = "normal",
  DARK = "dark"
}

const App: React.FC<any> = () => {

  const {theme, changeTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={changeTheme}>{theme === Theme.DARK ? "Normal" : "Dark"}</button>
      <Link to={"/"}>Main</Link>
      <div>ok</div>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;