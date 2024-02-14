import { Country } from '../../model/types/country';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';

const allCountry: SelectOption[] = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.POLLAND, content: Country.POLLAND },
    { value: Country.ARMENIA, content: Country.ARMENIA },
];

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    changeCountry: (value: Country) => void;
}

export const CountrySelect: React.FC<CountrySelectProps> = memo(({ className, value, readonly, changeCountry }) => {
    const {t} = useTranslation('profile');

    const changeHandler = useCallback((value: string) => {
        const country = value as Country;
        changeCountry(country);
      }, [])

    return (
        <Select className={classNames('', {}, [className])} label={t('Choose country')} options={allCountry} value={value} disable={readonly} onChange={changeHandler} />
    );
});
