import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthInited = (state: StateSchema): boolean => {
    return state?.user._inited;
}
