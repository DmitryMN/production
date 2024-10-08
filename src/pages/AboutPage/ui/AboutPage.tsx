import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();  
  return (
    <div>
      {t('About page')}
    </div>
  );
};

export default AboutPage;
