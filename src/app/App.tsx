import React, { Suspense, useEffect } from 'react';
import './styles/_index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App: React.FC<any> = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error();
    }
  }, [])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar className={theme} />
        <div className='content-page'>
          <Sidebar />
          <div className='page-wrapper'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App;
