import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import style from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
    console.log('render loginform');
    const { t } = useTranslation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const userNameHandler = (value: string) => {
        setUserName(value);
    }

    const passwordHandler = (value: string) => {
        setPassword(value);
    }

    return (
        <div className={classNames(style.loginForm, {} , [className])}>
            <Input value={userName} onChange={userNameHandler} placeHolder={'*Username'} />
            <Input value={password} onChange={passwordHandler} placeHolder={'*Password'} />
            <Button className={style.button}>
                {t('Login')}
            </Button>
        </div>
    );
};
