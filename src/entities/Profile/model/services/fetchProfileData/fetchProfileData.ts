import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { rejectWithValue, dispatch, extra }) => {
        try {
            const requestHeader = {
                headers: {
                    authorization: '123'
                }
            };

            const response = await extra.api.get<Profile>('/profile', requestHeader);
            
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Fetch profile data error');
        }
    },
);
