import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange: (value: string) => void;
    type?: string;
    placeHolder?: string;
}

export const Input: React.FC<InputProps> = memo(({ className, value, onChange, type = 'text', placeHolder, ...props }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input className={classNames('', {}, [className])} type={type} value={value} onChange={onChangeHandler} placeholder={placeHolder} />
    );
});
