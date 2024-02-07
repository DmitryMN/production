import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (state: StateSchema): boolean => {
    return state.profile?.readonly;
}
