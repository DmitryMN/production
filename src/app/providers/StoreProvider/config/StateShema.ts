import { CounterChema } from 'entities/Counter';
import { UserChema } from 'entities/User';

export interface StateChema {
    counter: CounterChema
    user: UserChema
}
