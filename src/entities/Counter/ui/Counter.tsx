import React from 'react';
import { counterActions } from '../model/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounter } from '../model/selectors/getCounter/getCounter';

export const Counter = () => {
    const dispatch = useDispatch();
    const { value } = useSelector(getCounter);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>Value: {value}</h1>
            <div style={{ display: 'flex', gap: '5px' }}>
                <Button onClick={increment}>increment</Button>
                <Button onClick={decrement}>decrement</Button>
            </div>
        </div>
    );
};
