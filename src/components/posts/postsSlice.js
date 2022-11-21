import {createSlice } from "@reduxjs/toolkit";
import {blankGenresObject } from "../../utils/helperObjects";



const initialState = {
    currentGenreName: "AI",
    isSearching: false,
    searchWord: "",
    searchResults: [],
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
        updateIsSearching: (state, action) => {
            const isSearching = action.payload.value
            state.isSearching = isSearching;
            //clear value when not in search mode
            if(!isSearching){
                state.searchWord = "";
            }
        },
        search: (state, action) => {
            const searchWord = action.payload.searchWord.toLowerCase();
            const currentGenrePosts = state.allPosts[state.currentGenreName];
            state.searchWord = searchWord;
            state.searchResults = currentGenrePosts.map(post => ({...post, title: post.title.toLowerCase()})).filter(post => post.title.includes(searchWord)); 
        },
    }
})

export const selectAllPosts = (state) => state.posts.allPosts;
export const selectIsSearching = (state) => state.posts.isSearching;
export const selectSearchResults = (state) => state.posts.searchResults;
export const selectSearchWord = (state) => state.posts.searchWord;

export const {updateGenrePosts, updateIsSearching, search} = postsSlice.actions;

export default postsSlice.reducer;
