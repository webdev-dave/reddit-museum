import {createSlice } from "@reduxjs/toolkit";
import {blankGenresObject } from "../../utils/helperObjects";



const initialState = {
    currentGenreName: "AI",
    allPosts: blankGenresObject,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        updateGenrePosts: (state, action) => {
            const genreName = action.payload.genreName;
            state.allPosts[genreName] = action.payload.posts;
            state.currentGenreName = genreName;
        },
    }
})

export const selectAllPosts = (state) => state.posts.allPosts;
//export const selectCurrentGenreName = (state) => state.posts.currentGenreName;

export const {updateGenrePosts} = postsSlice.actions;

export default postsSlice.reducer;
