import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1
};

export const otherStateSlice = createSlice({
    name: 'otherStateSlice',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload
        }
    }
});

export const { setStep } = otherStateSlice.actions;

export default otherStateSlice.reducer;