import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string; }>(
    'login/loginByUsername',
    async (authData, { rejectWithValue }) => {
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
            return response.data;
        } catch (e) {
            return rejectWithValue('Authorization error');
        }
    },
);
