import React, { useMemo } from 'react';
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
    onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ className, label, options }) => {

    const optionsList = useMemo(() => {
        return options?.map((opt) => {
            return (
                <option className={style.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            );
        });
    }, []);

    return (
        <div className={classNames(style.select_wrapper, {}, [className])}>
            {label && (<span className={style.label}>{label}</span>)}
            <select>
                {optionsList}
            </select>
        </div>
    );
};