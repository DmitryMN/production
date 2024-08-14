import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollRestorationSchema } from '../../model/types/ScrollRestorationSchema';


const initialState: ScrollRestorationSchema = {
    scroll: {}
};

const ScrollRestorationSlice = createSlice({
    name: 'scrollRestoration',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string, possition: number; }>) => {
            state.scroll[action.payload.path] = action.payload.possition;
        }
    }
});

export const { actions: scrollRestorationActions } = ScrollRestorationSlice;
export const { reducer: scrollRestorationReducer } = ScrollRestorationSlice;
