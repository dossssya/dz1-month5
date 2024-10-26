import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count = Math.max(state.count - action.payload, 0);
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
