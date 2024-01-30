import { createSlice } from '@reduxjs/toolkit';
import { ProfileChema } from '../types/profile';

const initialState: ProfileChema = {
    data: undefined,
    isLoading: false,
    error: '',
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;