import { AddCommentSchema } from './model/types/addCommentSchema';
import { addCommentSliceActions, addCommentSliceReducer } from './model/slice/addCommentsSlice';
import { AddCommentFormLazy } from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm.lazy';

export { AddCommentFormLazy as AddCommentForm };

export {
    AddCommentSchema,
    addCommentSliceActions,
    addCommentSliceReducer,
};