import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: Partial<StateSchema> = {
            user: {
                _inited: false,
            },
            loginForm: {
                username: 'Alex',
                password: '123',
                isLoading: false,
                error: 'error'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })
});
