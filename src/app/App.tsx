import React, {Suspense} from 'react';
import Counter from '../components/Counter';
import {
  Routes,
  Route, Link
} from 'react-router-dom';
import {AboutAsync} from 'pages/About';
import {HomeAsync} from 'pages/Home';
import "./styles/index.scss";
import {useTheme} from 'app/providers/ThemeProviders';
import {classNames} from '../shared/lib/classNames';

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