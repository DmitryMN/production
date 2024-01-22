import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthUserState = (state: StateSchema) => {
    return state?.user.authData;
}
