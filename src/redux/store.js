import { configureStore } from "@reduxjs/toolkit";

// reducers
import absorbanceDataReducer from "../redux/absorbanceDataSlice";
import backgroundDataReducer from "../redux/backgroundDataSlice";
import devModeReducer from "../redux/devModeSlice";
import errorReducer from "../redux/errorSlice";
import lectureBottleReducer from "./lectureBottleSlice";
import parameterReducer from "../redux/parameterSlice";
import peaksDataReducer from "../redux/peaksDataSlice";
import progressReducer from "../redux/progressSlice";
import sampleDataReducer from "../redux/sampleDataSlice";
import timerReducer from "../redux/timerSlice";
import experimentalSetupReducer from "../redux/experimentalSetupSlice";
import acquireSpectrumReducer from "../redux/acquireSpectrumSlice";
import scanReducer from "../redux/scanSlice";

/**
 * Function that sets the reducers called upon to update state
 */
export const store = configureStore({
  reducer: {
    absorbanceData: absorbanceDataReducer,
    backgroundData: backgroundDataReducer,
    error: errorReducer,
    lectureBottle: lectureBottleReducer,
    parameter: parameterReducer,
    peaksData: peaksDataReducer,
    progress: progressReducer,
    sampleData: sampleDataReducer,
    timer: timerReducer, // For keeping track of how long the instrument window spiner has been running
    devMode: devModeReducer,
    experimentalSetup: experimentalSetupReducer,
    acquireSpectrum: acquireSpectrumReducer,
    scan: scanReducer,
  },  
  // Middleware configuration
  // This is to disable the serializable check and immutable check
  // that is causing issues storing data points
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
