import { createSelector } from '@reduxjs/toolkit';
import { getScrollRestoration } from '../getScrollRestoration/getScrollRestoration';
import { StateSchema } from 'app/providers/StoreProvider';


export const getScrollRestorationPath = createSelector(
    getScrollRestoration,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);