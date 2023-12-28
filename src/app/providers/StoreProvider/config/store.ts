import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateChema } from './StateShema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export const createReduxStore = (initialState: StateChema) => {
    const rootReducers: ReducersMapObject<StateChema> = {
        counter: counterReducer,
        user: userReducer
    };

    return configureStore<StateChema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
