import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema): string => {
    return state?.loginForm?.username || '';
}
