import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: false,
    msgText: "",
};

/**
 * Redux Toolkit slice for setting error related data
 */
const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        // payload is a list [boolean, string]
        //   boolean: `true` or `false` to set or unset the error
        //   string: text associated with a particular error
        setMessage: (state, { payload }) => {
            state.msg = payload[0];
            state.msgText = payload[1];
        },
    },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
