import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  molecule: "HCN",
  stepSize: 0.1,
  frequencyMin: 2000,
  frequencyMax: 4000,
  numCyclesPerStep: 1,
  microwavePulseWidth: 0,
  mwBand: "S",
  frequencyRange: { min: 2, max: 40 }
};

/**
 * Redux Toolkit slice for setting the experimental values
 */
const experimentalSetupSlice = createSlice({
  name: "experimentalSetup",
  initialState,
  reducers: {
    /**
     * Sets the molecule value
     */
    setMolecule: (state, { payload }) => {
      state.molecule = payload;
    },
    /**
     * Sets the step size value
     */
    setStepSize: (state, { payload }) => {
      state.stepSize = payload;
    },
    /**
     * Sets the minimum frequency value
     */
    setFrequencyMin: (state, { payload }) => {
      state.frequencyMin = payload;
    },
    /**
     * Sets the maximum frequency value
     */
    setFrequencyMax: (state, { payload }) => {
      state.frequencyMax = payload
    },
    /**
     * Sets the number of cycles per step value
     */
    setNumCyclesPerStep: (state, { payload }) => {
      state.numCyclesPerStep = payload;
    },
    /**
     * Sets the microwave pulse width value
     */
    setMicrowavePulseWidth: (state, { payload }) => {
      state.microwavePulseWidth = payload;
    },
    /**
     * Sets the microwave band value
     */
    setsMWBand: (state, { payload }) => {
      state.mwBand = payload;
    },
    /**
     * Sets the frequency range
     */
    setFrequencyRange: (state, { payload }) => {
      state.frequencyRange = payload;
    }
  },
});

export const {
  setMolecule,
  setStepSize,
  setFrequencyMin,
  setFrequencyMax,
  setNumCyclesPerStep,
  setMicrowavePulseWidth,
  setsMWBand,
  setFrequencyRange
} = experimentalSetupSlice.actions;

export default experimentalSetupSlice.reducer;
