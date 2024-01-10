import React, { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import style from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);

    const userNameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const passwordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const clickHandler = () => {

    }

    return (
        <div className={classNames(style.loginForm, {}, [className])}>
            <Input value={username} onChange={userNameHandler} placeHolder={'*Username'} autoFocus={true} />
            <Input value={password} onChange={passwordHandler} placeHolder={'*Password'} />
            <Button className={style.button} onClick={clickHandler}>
                {t('Login')}
            </Button>
        </div>
    );
});
