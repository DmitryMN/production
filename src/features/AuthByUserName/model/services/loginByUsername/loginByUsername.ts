import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import USER_LOCALSTORAGE from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string; }>(
    'login/loginByUsername',
    async (authData, { rejectWithValue, dispatch }) => {
        try {
            const requestHeader = {
                headers: {
                    authorization: '123'
                }
            };
            const response = await axios.post<User>('http://localhost:8000/login', authData, requestHeader);
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
