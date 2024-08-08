import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers?: ReducersList;
    removeAutoUnmount?: boolean;
    children: React.ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ reducers, removeAutoUnmount = true, children }) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const keys = Object.keys(store.reducerManager.getReducerMap());
        console.log("key: " + (keys));
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            if (!keys.includes(name)) {
                store.reducerManager?.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
            console.log('reducer name: ' + name);
        });
        return () => {
            if (removeAutoUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager?.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {children}
        </>
    );
};
