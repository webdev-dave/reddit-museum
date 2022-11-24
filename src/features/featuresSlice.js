import {createSlice } from "@reduxjs/toolkit";


const initialState = {

};

const featuresSlice = createSlice({
    name: 'features',
    initialState: initialState,
    reducers: {
        updateDisplayFullScreen: (state, action) => {

        },
    }
})

export const selectFsModeIsActive = (state) => state.features.displayFullScreen.fsModeIsActive;
export const {updateDisplayFullScreen} = featuresSlice.actions;
export default featuresSlice.reducer;
