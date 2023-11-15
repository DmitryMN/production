import React, { Suspense } from "react";
import "./index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage.lazy";
import MainPageLazy from "./pages/MainPage.lazy";


const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <div>ok</div>
      <Link to={'/about'}>About</Link>
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