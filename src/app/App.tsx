import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProviders';
import { classNames } from '../shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>{t('loading')}</div>}>
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