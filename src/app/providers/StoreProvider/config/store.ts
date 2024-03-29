import { Reducer, ReducersMapObject, StateFromReducersMapObject, UnknownAction, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { instance } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

export const createReduxStore = (initialState: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: instance,
                        navigate,
                    }
                }
            }),
    });

    // @ts-expect-error because this code is testing a compiler I'm writing
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
