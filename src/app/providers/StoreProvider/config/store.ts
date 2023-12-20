import { configureStore } from '@reduxjs/toolkit';
import { StateChema } from './StateShema';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState: StateChema) => {
    return configureStore<StateChema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
