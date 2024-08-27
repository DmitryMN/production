import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    disable?: boolean;
    onChange?: (value: T) => void;

}

export const Select = <T extends string>({ className, label, options, value, disable, onChange }: SelectProps<T>) => {

    const optionsList = useMemo(() => {
        return options?.map((opt) => {
            return (
                <option className={style.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            );
        });
    }, []);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(style.select_wrapper, {}, [className])}>
            {label && (<span className={style.label}>{label + ' => '}</span>)}
            <select onChange={onChangeHandler} className={style.select} disabled={disable} value={value}>
                {optionsList}
            </select>
        </div>
    );
};