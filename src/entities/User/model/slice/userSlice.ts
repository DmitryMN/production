import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import USER_LOCALSTORAGE from 'shared/const/localStorage';

const initialState: UserSchema = {
    _inited: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthUser: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE);
        }
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
