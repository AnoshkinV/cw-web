import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/userTypes";

interface PostState {
    post: IPost[] | null,
}

const initialState: PostState = {
    post: null,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPost[]>) => {
            state.post = action.payload
        },
        addPost: (state, action: PayloadAction<IPost>) => {
            state.post.push(action.payload)
        }
    }
})

export const { setPosts, addPost } = postSlice.actions

export default postSlice.reducer