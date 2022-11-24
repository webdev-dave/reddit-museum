import {createSlice } from "@reduxjs/toolkit";


const initialState = {
    displayFullScreen: {
        fsModeIsActive: false,
        activationTarget: null,
    }
};

const featuresSlice = createSlice({
    name: 'features',
    initialState: initialState,
    reducers: {
        updateDisplayFullScreen: (state, action) => {
            // const activationTarget = action.payload.activationTarget;
            const fsModeIsActive = action.payload.fsModeIsActive;
            state.displayFullScreen.fsModeIsActive = fsModeIsActive;
            // state.displayFullScreen.activationTarget = null;
        },
    }
})

export const selectFsModeIsActive = (state) => state.features.displayFullScreen.fsModeIsActive;


export const {updateDisplayFullScreen} = featuresSlice.actions;

export default featuresSlice.reducer;
