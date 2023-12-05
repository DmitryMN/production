import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      {
        t('Main page')
      }
    </div>
  )
}

export default MainPage;
