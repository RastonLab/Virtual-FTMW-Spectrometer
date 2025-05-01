import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scanActive : false,
    startTime  : null,   // Date.now() when scan begins
    durationMs : 0       // full length of the scan in ms
};
  
/**
 * Redux Toolkit slice for setting the scan state
 */
const scanSlice = createSlice({
    name: 'scan',
    initialState,
    reducers: {
        scanStarted: (state, action) => {
            state.scanActive = true
            state.startTime  = action.payload.startTime 
            state.durationMs = action.payload.durationMs 
        },
        scanEnded: (state) => initialState
    }
});

export const { scanStarted, scanEnded } = scanSlice.actions;
export default scanSlice.reducer;