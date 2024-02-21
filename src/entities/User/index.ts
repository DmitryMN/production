import { User, UserSchema } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';
import { getAuthUserState } from './model/selectors/getAuthUserState/getAuthUserState';
import { getUserAuthInited } from './model/selectors/getUserAuthInited/getUserAuthInited';

export {
    User,
    UserSchema,
    userReducer,
    userActions,
    getAuthUserState,
    getUserAuthInited
};
