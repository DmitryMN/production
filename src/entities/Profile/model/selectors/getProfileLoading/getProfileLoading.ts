import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileLoading = (state: StateSchema): boolean => {
    return state.profile?.isLoading;
}
