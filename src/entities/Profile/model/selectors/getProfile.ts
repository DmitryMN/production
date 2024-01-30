import { StateSchema } from 'app/providers/StoreProvider';

export const getProfile = (state: StateSchema) => {
    return state.profile;
}
