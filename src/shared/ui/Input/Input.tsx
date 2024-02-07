import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeHolder?: string;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input: React.FC<InputProps> = memo(({ className, value, onChange, type = 'text', placeHolder, autoFocus, readonly, ...props }: InputProps) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods = {
        [style.readonly]: readonly
    }

    return (
        <input
            ref={inputRef} 
            className={classNames(style.input, mods, [className])} 
            type={type} 
            value={value} 
            onChange={onChangeHandler} 
            placeholder={placeHolder}
            readOnly={readonly} 
            {...props} 
        />
    );
});
