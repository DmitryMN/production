import { createSlice } from '@reduxjs/toolkit';
import { CounterChema } from 'entities/Counter/model/types/CounterChema';

const initialState: CounterChema = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
    extraReducers: (builder) => {
    }
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
