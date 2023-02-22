import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProviders';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div></div>}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App