import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentSchema } from '../types/addCommentSchema';

const initialState: AddCommentSchema = {
    text: '',
    isLoading: false,
    error: '',
};

const addCommentSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
});

export const { actions: addCommentSliceActions } = addCommentSlice;
export const { reducer: addCommentSliceReducer } = addCommentSlice;
