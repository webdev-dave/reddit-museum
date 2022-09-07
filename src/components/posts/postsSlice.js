import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsArray: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {

    }
})

export default postsSlice.reducer;
