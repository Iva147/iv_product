import React from 'react';
import "./styles/index.scss";
import {useTheme} from 'app/providers/ThemeProviders';
import {classNames} from '../shared/lib/classNames';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/NavBar';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={() => toggleTheme()}>toggle button</button>
      <AppRouter />
    </div>
  )
}

export default App