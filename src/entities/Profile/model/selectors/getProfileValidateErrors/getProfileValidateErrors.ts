import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';

export const getProfileValidateErrors = (state: StateSchema): ValidateProfileErrors[] => {
    return state.profile?.validateErrors;
}
