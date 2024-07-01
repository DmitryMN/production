import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentSliceReducer, addCommentSliceActions } from '../../model/slice/addCommentsSlice';
import { useSelector } from 'react-redux';
import { getAddCommentText } from '../../model/selectors/getAddCommentText/getAddCommentText';
import { getAddCommentError } from '../../model/selectors/getAddCommentError/getAddCommentError';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void
}

const initialReducers: ReducersList = {
    addCommentForm: addCommentSliceReducer
};

const AddCommentForm: React.FC<AddCommentFormProps> = memo(({ className, onSendComment }) => {
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentText);
    const error = useSelector(getAddCommentError);

    const onChangeTexthandler = useCallback((value: string) => {
        dispatch(addCommentSliceActions.setComment(value));
    }, [dispatch]);
    
    const onSendAddComment = useCallback(() => {
        onSendComment(text || '');
        dispatch(addCommentSliceActions.setComment(''));
    }, [dispatch, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAutoUnmount={true}>
            <div className={classNames(style.addCommentForm, {}, [className])}>
                <Input value={text} onChange={onChangeTexthandler} placeHolder={'Enter comment please..'} />
                <Button className={style.button} onClick={onSendAddComment}>Send</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;