import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const city: SelectOption[] = [
    {
      value: '1',
      content: 'Moscow'
    },
    {
      value: '2',
      content: 'New York'
    }
  ];

  return (
    <div>
      {t('About page')}
      <Select options={city} value='2'/>
    </div>
  );
};

export default AboutPage;
