import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1
};

export const taskStateSlice = createSlice({
    name: 'taskStateSlice',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload
        }
    }
});

export const { setStep } = taskStateSlice.actions;

export default taskStateSlice.reducer;