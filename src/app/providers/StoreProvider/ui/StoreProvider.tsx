import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import React from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
