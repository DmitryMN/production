import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeHolder?: string;
    autoFocus?: boolean;
}

export const Input: React.FC<InputProps> = memo(({ className, value, onChange, type = 'text', placeHolder, autoFocus, ...props }: InputProps) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input ref={inputRef} className={classNames(style.input, {}, [className])} type={type} value={value} onChange={onChangeHandler} placeholder={placeHolder} {...props} />
    );
});
