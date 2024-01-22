import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsloading = (state: StateSchema) => {
    return state?.loginForm?.isLoading || false;
}
