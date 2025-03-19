import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    params: null,
    data: null,
    frequencyMin: null,
    frequencyMax: null,
};

/**
 * Redux Toolkit slice for setting spectrum related data
 */
const acquireSpectrumSlice = createSlice({
    name: "acquireSpectrum",
    initialState,
    reducers: {
        setSpectrumData: (state, { payload }) => {
            state.data = payload[0];
            state.frequencyMin = payload[1];
            state.frequencyMax = payload[2];
        },

        setSpectrumParameters: (state, { payload }) => {
            state.params = payload
        },
    },
});

export const { setSpectrumData, setSpectrumParameters } = acquireSpectrumSlice.actions;

export default acquireSpectrumSlice.reducer;