import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import {USER_LOCALSTORAGE} from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { rejectWithValue, dispatch, extra }) => {
        try {
            const requestHeader = {
                headers: {
                    authorization: '123'
                }
            };
            
            const response = await extra.api.post<User>('/login', authData, requestHeader);
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(response.data));
            dispatch(userActions.setAuthUser(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Authorization error'));
        }
    },
);
