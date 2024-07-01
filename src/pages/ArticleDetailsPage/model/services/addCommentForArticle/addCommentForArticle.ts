import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import { getAuthUserState } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, { rejectWithValue, dispatch, extra, getState }) => {
        try {
            const requestHeader = {
                headers: {
                    authorization: '123'
                }
            };

            const article = getArticleDetailsData(getState());
            // const text = getAddCommentText(getState());
            const user = getAuthUserState(getState());

            if (!text || !article || !user) {
                return rejectWithValue('no data');
            }

            const data = {
                text: text,
                articleId: article.id,
                userId: user.id
            };

            const response = await extra.api.post<Comment>('/comments', data, requestHeader);
            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('Send Comment Error');
        }
    },
);
