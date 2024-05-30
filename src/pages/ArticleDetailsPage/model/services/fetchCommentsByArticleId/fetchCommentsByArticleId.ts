import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';


export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, { rejectWithValue, dispatch, extra }) => {
        try {
            const requestHeader = {
                headers: {
                    authorization: '123',                    
                },
                params: {
                    articleId,
                    _expand: 'user'
                }
            };

            const response = await extra.api.get<Comment[]>(`/comments`, requestHeader);
            
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Fetch comments data error');
        }
    },
);
