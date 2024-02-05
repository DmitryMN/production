import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (state: StateSchema): string => {
    return state.profile?.error;
}
