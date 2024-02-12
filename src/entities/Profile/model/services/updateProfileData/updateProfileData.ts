import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from 'entities/Profile/model/types/profile';

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { rejectWithValue, dispatch, extra, getState }) => {
        const formData = getProfileForm(getState())

        try {
            const requestHeader = {
                headers: {
                    authorization: '123'
                }
            };            

            const response = await extra.api.put<Profile>('/profile', formData, requestHeader);
            
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Fetch profile data error');
        }
    },
);
