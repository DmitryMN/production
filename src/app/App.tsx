import React, { Suspense, useEffect, UIEvent } from 'react';
import './styles/_index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthInited, userActions } from 'entities/User';
import { useSelector } from 'react-redux';

const App: React.FC<any> = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserAuthInited);

  useEffect(() => {
    dispatch(userActions.initAuthUser());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar className={theme} />
        <div className='content-page'>
          <Sidebar />
          <div className='main'>
            {
              inited && <AppRouter />
            }
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
