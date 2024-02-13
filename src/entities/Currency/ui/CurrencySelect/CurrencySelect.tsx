import { Currency } from '../../model/types/currency';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';

const allCurrency: SelectOption[] = [
    { value: Currency.RUB, content: Currency.RUB},
    { value: Currency.USD, content: Currency.USD},
    { value: Currency.EUR, content: Currency.EUR}
]

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean
    changeCurrency: (value: Currency) => void
}

export const CurrencySelect: React.FC<CurrencySelectProps> = memo(({className, value, readonly, changeCurrency}) => {
  const {t} = useTranslation('profile');

  const changeHandler = useCallback((value: string) => {
    const currency = value as Currency;
    changeCurrency(currency)
  }, [])

  return (
    <Select className={classNames('', {}, [className])} label={t('Choose currency')} options={allCurrency} value={value} disable={readonly} onChange={changeHandler}/>
  )
});
