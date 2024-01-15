import React, { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import style from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const userNameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const passwordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const clickHandler = useCallback(() => {
        console.log({ username });
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(style.loginForm, {}, [className])}>
            <Text title={'Авторизация'}/>
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input value={username} onChange={userNameHandler} placeHolder={'*Username'} autoFocus={true} />
            <Input value={password} onChange={passwordHandler} placeHolder={'*Password'} />
            <Button className={style.button} onClick={clickHandler} disabled={isLoading}>
                {t('Login')}
            </Button>
        </div>
    );
});
