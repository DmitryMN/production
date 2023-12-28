import { createSlice } from '@reduxjs/toolkit';
import { UserChema } from '../types/user';

const initialState: UserChema = {
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
