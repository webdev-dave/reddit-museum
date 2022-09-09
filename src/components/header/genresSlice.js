import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AI: '/r/aiArt/',
    Surrealist: '/r/surrealism/',
    // Steampunk: 'subreddit',
    // Romantic: 'subreddit',
    // Modern: 'subreddit',
    // Abstract: 'subreddit',
    // Digital: 'subreddit',
    // Anime: 'subreddit',
    // Kanagawa: 'subreddit',
    // Impressionist: 'subreddit'

}


const genresSlice = createSlice({
    name: 'genres',
    initialState: initialState,
    reducers: {

    }
});

export const selectGenres = (state) => state.genres;

export default genresSlice.reducer;