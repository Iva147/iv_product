import React, {Suspense, useContext, useState} from 'react';
import Counter from './components/Counter';
import {
  BrowserRouter,
  Routes,
  Route, Link
} from 'react-router-dom';
import AboutAsync from './pages/AboutAsync';
import HomeAsync from './pages/HomeAsync';
import "./styles/index.scss";
import useTheme from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Counter />
      <button onClick={() => toggleTheme()}>toggle button</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeAsync />}/>
          <Route path="about" element={<AboutAsync />}/>
        </Routes>
      </Suspense>

    </div>
  )
}

export default App