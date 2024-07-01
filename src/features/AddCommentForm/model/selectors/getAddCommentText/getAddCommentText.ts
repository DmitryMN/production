import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentText = (state: StateSchema) => { 
   return state.addCommentForm?.text || ''; 
};