import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "../redux/errorSlice";
import peaksDataReducer from "../redux/peaksDataSlice";
import progressReducer from "../redux/progressSlice";
import experimentalSetupReducer from "../redux/experimentalSetupSlice";
import acquireSpectrumReducer from "../redux/acquireSpectrumSlice";
import scanReducer from "../redux/scanSlice";

/**
 * Function that sets the reducers called upon to update state
 */
export const store = configureStore({
  reducer: {
    error: errorReducer,
    peaksData: peaksDataReducer,
    progress: progressReducer,
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
