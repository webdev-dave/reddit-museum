import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AI: '/r/aiArt/',
    Architecture: '/r/ArchitecturePorn/',
    Design: '/r/DesignPorn/',
    Impressionism: '/r/impressionism/',
    Pop_Art: '/r/PopArt/',
    Psychedelic: '/r/PsychedelicArt/',
    Street_Art: '/r/StreetArtPorn/', 
    Street_Photography: '/r/streetphotography/',
    Surrealism: '/r/surrealism/',
    
    //Medieval_Art: 'subreddit',
    //Steampunk: 'subreddit',
    // Modern: 'subreddit',
    // Abstract: 'subreddit',
    // Digital: 'subreddit',
    // Anime: 'subreddit',
    // Kanagawa: 'subreddit',

}


const genresSlice = createSlice({
    name: 'genres',
    initialState: initialState,
    reducers: {

    }
});

export const selectGenres = (state) => state.genres;

export default genresSlice.reducer;