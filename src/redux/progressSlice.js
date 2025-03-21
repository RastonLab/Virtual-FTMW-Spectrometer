import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetching: false,
  prefetch: false,
  postfetch: false,
  cancelFetch: false,
};

/**
 * Redux Toolkit slice for toggling the progress spinner
 */
const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    /**
     * payload is a list [boolean, boolean, boolean]
     *   boolean: `true` or `false` to set or unset fetching
     *   boolean: `true` or `false` to set or unset prefetch
     *   boolean: `true` or `false` to set or unset postfetch
     */
    setProgress: (state, { payload }) => {
      state.fetching = payload[0];
      state.prefetch = payload[1];
      state.postfetch = payload[2];
    },
    /**
     * payload is a boolean to set or unset cancelFetch
     */
    setCancelFetch: (state, { payload }) => {
      state.cancelFetch = payload;
    }
  },
});

export const { setProgress, setCancelFetch } = progressSlice.actions;

export default progressSlice.reducer;
