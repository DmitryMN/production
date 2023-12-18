import React, { Suspense, useState } from 'react';
import './styles/_index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

const App: React.FC<any> = () => {
  const { theme } = useTheme();
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar className={theme} />
        <button onClick={() => { setOpen(true) }}>Open</button>
        <Modal isOpen={isOpen} onClose={() => { setOpen(false) }}><p>Hello</p></Modal>
        <div className='content-page'>
          <Sidebar />
          <div className='main'>
            <div className='wrapper'>
              <AppRouter />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
