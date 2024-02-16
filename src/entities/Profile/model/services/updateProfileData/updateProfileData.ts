import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfileData',
    async (_, { rejectWithValue, dispatch, extra, getState }) => {
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

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
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
