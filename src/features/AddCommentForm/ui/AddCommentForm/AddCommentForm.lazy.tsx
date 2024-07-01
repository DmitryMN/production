import React from 'react';
import { AddCommentFormProps } from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormLazy = React.lazy<React.FC<AddCommentFormProps>>(() => import('./AddCommentForm'));