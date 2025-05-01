import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  molecule: "OCS",
  stepSize: 1,
  frequencyMin: 12100,
  frequencyMax: 12200,
  numCyclesPerStep: 1,
  microwavePulseWidth: 1,
  mwBand: "Ku",
  frequencyRange: { min: 12000, max: 18000 },
  repetitionRate: 1,
  molecularPulseWidth: 500,
  acquisitionType: 'range',
  vres: 2000,
  currentFrequency: 0,
  currentCycle: 1
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
    },
    /**
     * Sets the repetition rate
     */
    setRepetitionRate: (state, { payload }) => {
      state.repetitionRate = payload;
    },
    /**
     * Sets the molecular pulse width
     */
    setMolecularPulseWidth: (state, { payload }) => {
      state.molecularPulseWidth = payload;
    },
    /**
     * Sets the acquisition type
     */
    setAcquisitionType: (state, { payload }) => {
      state.acquisitionType = payload;
    },
    /**
     * Sets the vres for single frequency acquisition
     */
    setVres: (state, { payload }) => {
      state.vres = payload;
    },
    /**
     * Sets the current frequency
     */
    setCurrentFrequency: (state, { payload }) => {
      const { stepsDone = 0 } = payload;
      state.currentFrequency = state.frequencyMin + stepsDone * state.stepSize;
    },
    /**
     * Sets the current cycle iteration
     */
    setCurrentCycle: (state, { payload }) => {
      state.currentCycle = payload;
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
  setFrequencyRange,
  setRepetitionRate,
  setMolecularPulseWidth,
  setAcquisitionType,
  setVres,
  setCurrentFrequency,
  setCurrentCycle,
} = experimentalSetupSlice.actions;

export default experimentalSetupSlice.reducer;
