import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    disable?: boolean
    onChange?: (value: string) => void;
    
}

export const Select: React.FC<SelectProps> = memo(({ className, label, options, value, disable, onChange }) => {

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
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(style.select_wrapper, {}, [className])}>
            {label && (<span className={style.label}>{label + ' => '}</span>)}
            <select onChange={onChangeHandler} className={style.select} disabled={disable} value={value}>
                {optionsList}
            </select>
        </div>
    );
});