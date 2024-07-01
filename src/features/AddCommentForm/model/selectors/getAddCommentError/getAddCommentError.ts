import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentError = (state: StateSchema) => { 
   return state.addCommentForm?.error || ''; 
};