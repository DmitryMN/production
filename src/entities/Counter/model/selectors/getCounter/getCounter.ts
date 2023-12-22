import { StateChema } from 'app/providers/StoreProvider';

export const getCounter = (state: StateChema) => {
    return state.counter;
}
