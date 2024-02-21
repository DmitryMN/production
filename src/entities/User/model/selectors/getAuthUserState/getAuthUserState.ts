import { StateSchema } from 'app/providers/StoreProvider';
import { User } from '../../types/user';

export const getAuthUserState = (state: StateSchema): User => {
    return state?.user.authData;
}
