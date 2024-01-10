import { CounterChema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterChema
    user: UserSchema
    loginForm: LoginSchema
}
