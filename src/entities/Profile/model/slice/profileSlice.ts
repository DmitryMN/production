import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileChema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

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
        changeReadonly: (state) => {
            state.readonly = !state.readonly
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state, action) => {
            state.error = '';
            state.isLoading = true;
        }).addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;