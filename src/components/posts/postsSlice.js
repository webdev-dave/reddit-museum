import {createSlice } from "@reduxjs/toolkit";
import {blankGenresObject } from "../../utils/helperObjects";


const initialState = {
    currentGenreName: "ai",
    currentlyOnDisplay: [],
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
            const currentPosts = action.payload.posts;
            state.currentGenreName = genreName;
            state.allPosts[genreName] = currentPosts;
            //state.currentlyOnDisplay = createLoadingArray(currentPosts);
            state.currentlyOnDisplay = currentPosts;
        },
        updateSliderMediaOnDisplay: (state, action)=>{
            const genreName = state.currentGenreName;
            const postIndex = action.payload.postIndex;
            const currentImageIndex = action.payload.currentImageIndex;
            const prevImageIndex = action.payload.prevImageIndex;
            state.allPosts[genreName][postIndex].gallery[currentImageIndex].isCurrentlyDisplayed = true;
            state.allPosts[genreName][postIndex].gallery[prevImageIndex].isCurrentlyDisplayed = false;
        },
        updateIsSearching: (state, action) => {
            const isSearching = action.payload.value
            state.isSearching = isSearching;
            //clear value when not in search mode
            if(!isSearching){
                state.searchWord = "";
                state.currentlyOnDisplay = state.allPosts[state.currentGenreName];
            }
        },
        search: (state, action) => {
            const searchWord = action.payload.searchWord.toLowerCase();
            const currentGenrePosts = state.allPosts[state.currentGenreName];
            state.searchWord = searchWord;
            state.searchResults = currentGenrePosts.map(post => ({...post, title: post.title.toLowerCase()})).filter(post => post.title.includes(searchWord)); 
            state.currentlyOnDisplay = state.searchResults;
            
        },
        // updateFullScreenMode: (state, action) => {
        //     const postIndex = action.payload.postIndex;
        //     state.allPosts[state.currentGenreName][postIndex].fsModeIsActive = action.payload.fsModeIsActive;
        // }
    }
})


export const selectCurrentGenreName = (state) => state.posts.currentGenreName;
export const selectAllPosts = (state) => state.posts.allPosts;
export const selectCurrentGenrePosts = (state) => state.posts.allPosts[state.posts.currentGenreName];
export const selectCurrentlyOnDisplay = (state) => state.posts.currentlyOnDisplay;
export const selectIsSearching = (state) => state.posts.isSearching;
export const selectSearchWord = (state) => state.posts.searchWord;
// export const selectSearchResults = (state) => state.posts.searchResults;



export const { updateGenrePosts, updateIsSearching, search, updateFullScreenMode, updateSliderMediaOnDisplay } = postsSlice.actions;

export default postsSlice.reducer;
