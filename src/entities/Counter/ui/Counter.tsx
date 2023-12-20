import React from 'react';
import { counterActions } from '../model/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { CounterChema } from '../model/types/CounterChema';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: CounterChema) => { return state.value; });

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>Value: {counterValue}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
};
