import { StateChema } from 'app/providers/StoreProvider/config/StateShema';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import React from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: StateChema;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
