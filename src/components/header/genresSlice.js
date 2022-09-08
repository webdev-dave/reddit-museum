import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  "AI",
  "Surrealist (unavailable)",
  "Steampunk (unavailable)",
  "Romantic (unavailable)",
  "Modern (unavailable)",
  "Abstract (unavailable)",
  "Digital (unavailable)",
  "Anime (unavailable)",
  "Kanagawa (unavailable)",
  "Impressionist (unavailable)",
];

const genresSlice = createSlice({
    name: 'genres',
    initialState: initialState,
    reducers: {

    }
});

export const selectGenres = (state) => state.genres;

export default genresSlice.reducer;