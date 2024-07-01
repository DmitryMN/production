import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, { rejectWithValue, dispatch, extra }) => {
        try {
            const requestHeader = {
                headers: {
                    authorization: '123'
                }
            };

            const response = await extra.api.get<Profile>(`/profile/${profileId}`, requestHeader);
            
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Fetch profile data error');
        }
    },
);
